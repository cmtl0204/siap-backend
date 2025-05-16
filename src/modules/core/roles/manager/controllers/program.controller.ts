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
import { ProgramService } from '@modules/core/roles/manager/services/program.service';
import {
  CreateProgramDto,
  UpdateProgramDto,
} from '@modules/core/roles/manager/dto/prorgram';
import { PaginationDto } from '@shared/dto';

@ApiTags('Manager Programs')
@Auth()
@Controller('core/manager/programs')
export class ProgramController {
  constructor(private service: ProgramService) {}

  @ApiOperation({ summary: 'List all Programs' })
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
    @Body() payload: CreateProgramDto,
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
    @Body() payload: UpdateProgramDto,
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
