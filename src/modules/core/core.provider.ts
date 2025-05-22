import { DataSource } from 'typeorm';
import { ConfigEnum, CoreRepositoryEnum } from '@shared/enums';
import {
  ProgramEntity,
  ProjectEntity,
  StrategicPlanEntity,
} from '@modules/core/entities';

export const coreProviders = [
  {
    provide: CoreRepositoryEnum.PROJECT_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProjectEntity),
    inject: [ConfigEnum.PG_DATA_SOURCE],
  },

  {
    provide: CoreRepositoryEnum.PROGRAM_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProgramEntity),
    inject: [ConfigEnum.PG_DATA_SOURCE],
  },

  {
    provide: CoreRepositoryEnum.STRATEGIC_PLAN_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(StrategicPlanEntity),
    inject: [ConfigEnum.PG_DATA_SOURCE],
  },
];
