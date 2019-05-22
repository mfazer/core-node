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
import { NestAppService } from './nest.app.service'

// Nest - middleware:
import { LoggerMiddleware } from './common/middleware/logger.middleware'

// Config:
import { ConfigModule } from './common/modules/config.module'

// Constants:
import { databases } from './../../constants'

@Module({
  providers: [NestAppService],
  imports: [
    ConfigModule,
    // TODO: Move 'core-mongo' to .env file:
    MongooseModule.forRoot(`mongodb://localhost/${databases.mongo.name}`),
    UsersModule,
  ],
})
export class NestAppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware)
    // .forRoutes({ path: 'users', method: RequestMethod.POST })
  }
}
