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
import { ProjectService } from '@modules/core/roles/manager/services/project.service';
import {
  CreateProjectDto,
  UpdateProjectDto,
} from '@modules/core/roles/manager/dto/project';
import { PaginationDto } from '@shared/dto';

@ApiTags('Manager Projects')
@Auth()
@Controller('core/manager/projects')
export class ProjectController {
  constructor(private service: ProjectService) {}

  @ApiOperation({ summary: 'List all Projects' })
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

  @ApiOperation({ summary: 'List all Projects By User' })
  @Get('users/:userId')
  @HttpCode(HttpStatus.OK)
  async findByUser(
    @Query('userId') userId: string,
  ): Promise<ResponseHttpInterface> {
    const serviceResponse = await this.service.findByUser(userId);

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
    @Body() payload: CreateProjectDto,
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
    @Body() payload: UpdateProjectDto,
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
}
