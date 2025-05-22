import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Auth } from '@auth/decorators';
import { ResponseHttpInterface } from '@shared/interfaces';
import {
  CreateStrategicPlanDto,
  UpdateStrategicPlanDto,
} from '@modules/core/roles/operator/dto/strategic-plan';
import { PaginationDto } from '@shared/dto';
import { StrategicPlanService } from '@modules/core/roles/operator/services/strategic-plan.service';

@ApiTags('Manager Strategic Plans')
@Auth()
@Controller('core/operator/strategic-plans')
export class StrategicPlanController {
  constructor(private service: StrategicPlanService) {}

  @ApiOperation({ summary: 'List all Strategic Plans' })
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Query() params: PaginationDto,
  ): Promise<ResponseHttpInterface> {
    const serviceResponse = await this.service.findAll(params);

    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: `Registros Consultados`,
      title: `Consultados`,
    };
  }

  @ApiOperation({ summary: 'Delete Project' })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpInterface> {
    const serviceResponse = await this.service.findOne(id);

    return {
      data: serviceResponse.data,
      message: `Registro Consultado`,
      title: `Consultado`,
    };
  }

  @ApiOperation({ summary: 'Create Project' })
  @Post()
  @HttpCode(HttpStatus.OK)
  async create(
    @Body() payload: CreateStrategicPlanDto,
  ): Promise<ResponseHttpInterface> {
    const serviceResponse = await this.service.create(payload);

    return {
      data: serviceResponse.data,
      message: `Registro Creado`,
      title: `Creado`,
    };
  }

  @ApiOperation({ summary: 'Update Project' })
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: UpdateStrategicPlanDto,
  ): Promise<ResponseHttpInterface> {
    const serviceResponse = await this.service.update(id, payload);

    return {
      data: serviceResponse.data,
      message: `Registro Actualizado`,
      title: `Actualizado`,
    };
  }

  @ApiOperation({ summary: 'Delete Project' })
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpInterface> {
    const serviceResponse = await this.service.remove(id);

    return {
      data: serviceResponse.data,
      message: `Registro Eliminado`,
      title: `Eliminado`,
    };
  }

  @ApiOperation({ summary: 'List all Technical Feasibility Documents' })
  @Get(':id/technical-feasibility-documents')
  @HttpCode(HttpStatus.OK)
  async findTechnicalFeasibilityDocuments(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpInterface> {
    const serviceResponse =
      await this.service.findTechnicalFeasibilityDocuments(id);

    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: `Registros Consultados`,
      title: `Consultados`,
    };
  }

  @ApiOperation({ summary: 'List all Technical Feasibility Documents' })
  @Get(':id/approval-documents')
  @HttpCode(HttpStatus.OK)
  async findApprovalDocuments(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpInterface> {
    const serviceResponse = await this.service.findApprovalDocuments(id);

    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: `Registros Consultados`,
      title: `Consultados`,
    };
  }

  @ApiOperation({ summary: 'List all Technical Feasibility Documents' })
  @Get(':id/program-documents')
  @HttpCode(HttpStatus.OK)
  async findProgramDocuments(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpInterface> {
    const serviceResponse = await this.service.findProgramDocuments(id);

    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: `Registros Consultados`,
      title: `Consultados`,
    };
  }
}
