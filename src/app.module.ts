import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { config } from '@config';
import { AuthModule } from '@modules/auth/auth.module';
import { CommonModule } from '@modules/common/common.module';
import { CoreModule } from '@modules/core/core.module';
import { AuditModule } from '@modules/audit/audit.module';
import { ReportsModule } from '@modules/reports/reports.module';
import { ImportsModule } from '@modules/imports/imports.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        APP_URL: Joi.string().required(),
        API_KEY: Joi.string().required(),
        ENV: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_USER: Joi.string().required(),
        MAIL_HOST: Joi.string().required(),
        MAIL_PORT: Joi.string().required(),
        MAIL_USERNAME: Joi.string().required(),
        MAIL_PASSWORD: Joi.string().required(),
        MAIL_FROM_ADDRESS: Joi.string().required(),
        URL_LDAP: Joi.string().required(),
        URL_DINARDAP: Joi.string().required(),
      }),
    }),
    MulterModule.register({ dest: './uploads' }),
    HttpModule,
    AuditModule,
    AuthModule,
    CommonModule,
    CoreModule,
    ReportsModule,
    ImportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
