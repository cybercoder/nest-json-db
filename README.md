## Nest JSON DB

#### A module that implements [node-json-db](https://www.npmjs.com/package/node-json-db) as a NestJS dynamic module.

---

## Example usage:

Import the module:

```javascript
import { NestJSONDBModule } from '@cybercoder/nest-json-db';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    NestJSONDBModule.forRootAsync({
      useFactory: () => ({
        filename: 'myJSONdbFile',
        // humanReadable: true,
        // separator: '/',
        // saveOnPush: true,
        // syncOnSave: true,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

Service usage example:

```javascript
mport { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { JsonDBService } from '@cybercoder/nest-json-db';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly jsonDBService: JsonDBService,
  ) {}

  @Get()
  getHello(): string {
    this.jsonDBService.push(
      '/',
      {
        new: 'cool',
        json: {
          important: 5,
        },
      },
      false,
    );
    return this.appService.getHello();
  }
}
```

You can find `node-json-db` examples and documentation [here](https://www.npmjs.com/package/node-json-db).