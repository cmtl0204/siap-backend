import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CommonRepositoryEnum, CoreRepositoryEnum } from '@shared/enums';
import { ServiceResponseHttpInterface } from '@shared/interfaces';
import { ProjectEntity } from '@modules/core/entities';
import {
  CreateProjectDto,
  UpdateProjectDto,
} from '@modules/core/roles/planner/dto/project';
import { PaginationDto } from '@shared/dto';
import { PaginateFilterService } from '@shared/pagination/paginate-filter.service';
import { FileEntity } from '@modules/common/file/file.entity';
import { CataloguesService } from '@modules/common/catalogue/catalogue.service';
import { CatalogueEntity } from '@modules/common/catalogue/catalogue.entity';

@Injectable()
export class ProjectService {
  private paginateFilterService: PaginateFilterService<ProjectEntity>;

  constructor(
    @Inject(CoreRepositoryEnum.PROJECT_REPOSITORY)
    private readonly repository: Repository<ProjectEntity>,
    @Inject(CommonRepositoryEnum.FILE_REPOSITORY)
    private readonly fileRepository: Repository<FileEntity>,
    private readonly cataloguesService: CataloguesService,
  ) {
    this.paginateFilterService = new PaginateFilterService(this.repository);
  }

  async create(
    payload: CreateProjectDto,
  ): Promise<ServiceResponseHttpInterface> {
    const entity = this.repository.create(payload);

    return { data: await this.repository.save(entity) };
  }

  async findAll(params: PaginationDto): Promise<ServiceResponseHttpInterface> {
    return this.paginateFilterService.execute(params, ['name', 'code']);
  }

  async findProjectsByUser(
    userId: string,
  ): Promise<ServiceResponseHttpInterface> {
    return { data: await this.repository.find({ where: { userId } }) };
  }

  async findOne(id: string): Promise<ServiceResponseHttpInterface> {
    const entity = await this.repository.findOne({
      where: { id },
      relations: { program: true },
    });

    if (!entity) {
      throw new NotFoundException('Registro no encontrado');
    }

    return { data: entity };
  }

  async update(
    id: string,
    payload: UpdateProjectDto,
  ): Promise<ServiceResponseHttpInterface> {
    const entity = await this.repository.findOneBy({ id });

    if (!entity) {
      throw new NotFoundException('Registro no encontrado');
    }

    this.repository.merge(entity, payload);

    return { data: await this.repository.save(entity) };
  }

  async remove(id: string): Promise<ServiceResponseHttpInterface> {
    const entity = await this.repository.findOneBy({ id });

    if (!entity) {
      throw new NotFoundException('Registro no encontrado');
    }

    return { data: await this.repository.softRemove(entity) };
  }

  async findTechnicalFeasibilityDocuments(
    id: string,
  ): Promise<ServiceResponseHttpInterface> {
    const catalogue: CatalogueEntity = (
      await this.cataloguesService.findByCode('technicalFeasibilityDocument')
    ).data as CatalogueEntity;

    const entities = await this.fileRepository.find({
      where: { modelId: id, typeId: catalogue.id },
      relations: { type: true, user: true },
    });

    return { data: entities };
  }

  async findApprovalDocuments(
    id: string,
  ): Promise<ServiceResponseHttpInterface> {
    const catalogue: CatalogueEntity = (
      await this.cataloguesService.findByCode('approvalDocument')
    ).data as CatalogueEntity;

    const entities = await this.fileRepository.find({
      where: { modelId: id, typeId: catalogue.id },
      relations: { type: true, user: true },
    });

    return { data: entities };
  }

  async findProgramDocuments(
    id: string,
  ): Promise<ServiceResponseHttpInterface> {
    const catalogue: CatalogueEntity = (
      await this.cataloguesService.findByCode('programDocument')
    ).data as CatalogueEntity;

    const entities = await this.fileRepository.find({
      where: { modelId: id, typeId: catalogue.id },
      relations: { type: true, user: true },
    });

    return { data: entities };
  }
}
