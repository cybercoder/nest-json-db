import { ModuleOptions } from './module-options.interface';
import { Inject, Injectable } from '@nestjs/common';
import { MODULE_OPTIONS_TOKEN } from './module-definition';
import { JsonDB, Config } from 'node-json-db';

@Injectable()
export class Service extends JsonDB {
  constructor(@Inject(MODULE_OPTIONS_TOKEN) private options: ModuleOptions) {
    const config = new Config(
      options.filename,
      options.saveOnPush,
      options.humanReadable,
      options.separator,
      options.syncOnSave,
    );
    super(config);
  }
}
