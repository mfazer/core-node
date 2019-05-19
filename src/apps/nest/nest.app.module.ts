// Nest:
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  // RequestMethod,
} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Nest - modules:
import { UsersModule } from './users/users.module'

// Nest - controllers:
// None.

// Nest - services:
// None.

// Nest - middleware:
import { LoggerMiddleware } from './common/middleware/logger.middleware'

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost/core-mongo'),
  ],
  // controllers: [],
  // providers: [],
})
export class NestAppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
    // .forRoutes({ path: 'users', method: RequestMethod.POST })
  }
}
