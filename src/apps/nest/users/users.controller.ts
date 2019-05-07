// Nest:
import {
  Body,
  // Get,
  Controller,
  ForbiddenException,
  Get,
  Post,
  ValidationPipe,
} from '@nestjs/common'

// DTOs:
import { CreateNewUserDTO } from './dto/users.dto'

// Services:
import { UsersService } from './users.service'

// Types:
// import { IUser } from './users.types'

// Validation:
// import { ValidationPipe } from './../common/pipes/validation.pipe'

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) { }
  /* @Get()
  getAllUsers(): string {
    return `This action returns all ${this.ownTextRender()}.`
  }
  ownTextRender(): string {
    return 'USERS'
  } */
  @Get()
  async findAll() {
    throw new ForbiddenException()
  }
  @Post()
  async create(@Body(new ValidationPipe()) initUser: CreateNewUserDTO /*Payloads.Post.ICreateNewUser*/): Promise<string> {
    const { age, name, hasBeard } = initUser
    this.usersService.create(initUser)
    console.log(this.usersService.findAll())

    return `This action will create new user: ${name} has ${age} year(s) and has a beard: ${hasBeard ? 'yes3' : 'no'}.`
    // Database operations here.
  }
}
