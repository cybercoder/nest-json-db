import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './module-definition';
import { Service } from './service';

@Module({
  providers: [Service],
  exports: [Service],
})
export class NestJSONDBModule extends ConfigurableModuleClass {}
