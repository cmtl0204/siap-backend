import { Global, Module } from '@nestjs/common';
import { ManagerModule } from '@modules/core/roles/manager/manager.module';

@Global()
@Module({
  imports: [ManagerModule],
})
export class CoreModule {}
