// Nest:
import {
  Module,
  // Global,
} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Controllers:
import { UsersController } from './users.controller'

// Services:
import { UsersService } from './users.service'

// Database:
import { UserSchema } from './schemas/user.schema'

// @Global()
@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {
  // constructor(private readonly usersService: UsersService) { }
}
