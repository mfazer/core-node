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

// Validation:
// import { ValidationPipe } from './../common/pipes/validation.pipe'

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) { }

  /* @Get()
  async getAll() {
    throw new ForbiddenException()
  } */
  @Post()
  async create(
    @Body(new ValidationPipe({
      forbidNonWhitelisted: true,
      whitelist: true,
    })) initUser: CreateUserDTO,
  ): Promise<boolean> {
    // const { name, nick, email } = initUser
    const success: boolean = await this.usersService.create(initUser)
    return success
  }
}
