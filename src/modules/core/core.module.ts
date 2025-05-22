import { Global, Module } from '@nestjs/common';
import { OperatorModule } from '@modules/core/roles/operator/operator.module';

@Global()
@Module({
  imports: [OperatorModule],
})
export class CoreModule {}
