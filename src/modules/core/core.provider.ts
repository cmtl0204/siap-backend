import { DataSource } from 'typeorm';
import { ConfigEnum, CoreRepositoryEnum } from '@shared/enums';
import { ProjectEntity } from '@modules/core/entities';

export const coreProviders = [
  {
    provide: CoreRepositoryEnum.PROJECT_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProjectEntity),
    inject: [ConfigEnum.PG_DATA_SOURCE],
  },
];
