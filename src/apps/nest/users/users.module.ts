// Nest:
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Controllers:
import { UsersController } from './users.controller'

// Services:
import { UsersService } from './users.service'

// Database:
import { UserSchema } from './schemas/user.schema'

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
  exports: [UsersService],
})
export class UsersModule {
  // constructor(private readonly usersService: UsersService) { }
}
