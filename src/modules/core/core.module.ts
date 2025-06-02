import { Global, Module } from '@nestjs/common';
import { OperatorModule } from '@modules/core/roles/operator/operator.module';
import { PlannerModule } from '@modules/core/roles/planner/planner.module';

@Global()
@Module({
  imports: [PlannerModule, OperatorModule],
})
export class CoreModule {}
