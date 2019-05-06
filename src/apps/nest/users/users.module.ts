// Nest:
import {
  Module,
  // Global,
} from '@nestjs/common'

// Controllers:
import { UsersController } from './users.controller'

// Services:
import { UsersService } from './users.service'

// @Global()
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {
  // constructor(private readonly usersService: UsersService) { }
}
