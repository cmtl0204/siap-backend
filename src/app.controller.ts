import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ResponseHttpInterface } from '@shared/interfaces';
import { DatabaseSeeder } from '@database/seeders';
import { PublicRoute } from '@auth/decorators';
import { config } from '@config';
import { ConfigType } from '@nestjs/config';
import { AuthRepositoryEnum } from '@shared/enums';
import { Repository } from 'typeorm';
import { UserEntity } from '@auth/entities';

@Controller()
export class AppController {
  constructor(
    private readonly databaseSeeder: DatabaseSeeder,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    @Inject(AuthRepositoryEnum.USER_REPOSITORY)
    private repository: Repository<UserEntity>,
  ) {}

  @PublicRoute()
  @Post('init')
  async init(): Promise<ResponseHttpInterface> {
    if (this.configService.env === 'local') {
      await this.databaseSeeder.run();

      return {
        data: true,
        message: 'La base de datos fue precargada',
        title: 'Base de datos inicializada',
      };
    }

    return {
      data: true,
      message: 'Se encuentra en ambiente de producción',
      title: 'No es posible procesar su solicitud',
    };
  }

  @PublicRoute()
  @Get('version')
  async version(): Promise<ResponseHttpInterface> {
    return {
      data: await this.repository.findOneBy({
        username: 'cesar.tamayo@turismo.gob.ec',
      }),
      message: 'Success',
      title: 'Version',
    };
  }
}
