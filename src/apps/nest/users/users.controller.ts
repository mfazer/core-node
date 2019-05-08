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
import { CreateNewUserDTO } from './dto/users.dto'

// Services:
// import { UsersService } from './users.service'

// Validation:
// import { ValidationPipe } from './../common/pipes/validation.pipe'

@Controller('users')
export class UsersController {
  /* constructor(
    private readonly usersService: UsersService,
  ) { } */

  /* @Get()
  async getAll() {
    throw new ForbiddenException()
  } */
  @Post()
  async create(@Body(new ValidationPipe()) initUser: CreateNewUserDTO): Promise<string> {

    const { name, nick, email } = initUser

    // Services tests:
    // this.usersService.create(initUser)
    // console.log(this.usersService.findAll())

    return `User with name: ${name}, has nick: ${nick}, and email: ${email}.`

    // Database operations here.
  }
}
