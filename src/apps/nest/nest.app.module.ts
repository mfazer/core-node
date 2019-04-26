// Nest:
import {
  Module,
  // MiddlewareConsumer,
  // NestModule,
  // RequestMethod
} from '@nestjs/common'

// Nest - controllers:
import { NestAppController } from './nest.app.controller'
import { UsersController } from './users/users.controller'
import { WildController } from './users/wild/wild.controller'

// Nest - services:
import { NestAppService } from './nest.app.service'
import { UsersService } from './users/users.service'

// Nest - middleware:
// import { AppLoggerMiddleware } from './nest.app.middleware'

@Module({
  imports: [],
  controllers: [NestAppController, UsersController, WildController],
  providers: [NestAppService, UsersService],
})
export class NestAppModule /* implements NestModule */ {
  /* configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AppLoggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.ALL })
  } */
}
