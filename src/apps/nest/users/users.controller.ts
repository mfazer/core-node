// Nest:
import {
  Body,
  // Get,
  Controller,
  // ForbiddenException,
  // Get,
  Post,
  ValidationPipe,
} from '@nestjs/common'

// DTOs:
import { CreateUserDTO } from './dto/users.dto'

// Services:
import { UsersService } from './users.service'

// Types:
import { IResBody } from '../common/interfaces/nest.interface'

// Validation:
// import { ValidationPipe } from './../common/pipes/validation.pipe'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  /* @Get()
  async getAll() {
    throw new ForbiddenException()
  } */
  @Post()
  async create(
    @Body(
      new ValidationPipe({
        forbidNonWhitelisted: true,
        whitelist: true,
      }),
    )
    initUser: CreateUserDTO,
  ): Promise<IResBody> {
    // const { name, nick, email } = initUser
    const success: IResBody = await this.usersService.create(initUser)
    return success
  }
}
