import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CoreRepositoryEnum } from '@shared/enums';
import { ServiceResponseHttpInterface } from '@shared/interfaces';
import { ProjectEntity } from '@modules/core/entities';
import {
  CreateProjectDto,
  UpdateProjectDto,
} from '@modules/core/roles/manager/dto/project';
import { PaginationDto } from '@shared/dto';
import { PaginateFilterService } from '@shared/pagination/paginate-filter.service';

@Injectable()
export class ProjectService {
  private paginateFilterService: PaginateFilterService<ProjectEntity>;

  constructor(
    @Inject(CoreRepositoryEnum.PROJECT_REPOSITORY)
    private repository: Repository<ProjectEntity>,
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

  async findByUser(userId: string): Promise<ServiceResponseHttpInterface> {
    return { data: await this.repository.findOne({ where: { userId } }) };
  }

  async findOne(id: string): Promise<ServiceResponseHttpInterface> {
    const entity = await this.repository.findOne({
      where: { id },
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
}
