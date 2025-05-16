import { Global, Module } from '@nestjs/common';
import { CatalogueModule } from '@modules/common/catalogue/catalogue.module';
import { FileModule } from '@modules/common/file/file.module';
import { MailModule } from '@modules/common/mail/mail.module';
import { controllers } from '@modules/core/roles/manager/controllers';
import { ProjectService } from '@modules/core/roles/manager/services/project.service';
import { coreProviders } from '@modules/core/core.provider';
import { ProgramService } from '@modules/core/roles/manager/services/program.service';

@Global()
@Module({
  imports: [CatalogueModule, FileModule, MailModule],
  controllers,
  providers: [...coreProviders, ProjectService, ProgramService],
  exports: [],
})
export class ManagerModule {}
