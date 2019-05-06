// Nest:
import {
  Body,
  // Get,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common'

// DTOs:
import { CreateNewUserDTO } from './dto/users.dto'

// Services:
import { UsersService } from './users.service'

// Types:
// import { IUser } from './users.types'

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
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
  }
  @Post()
  async createNewUser(@Body() initUser: CreateNewUserDTO /*Payloads.Post.ICreateNewUser*/): Promise<string> {
    const { age, name, hasBeard } = initUser
    this.usersService.create(initUser)
    console.log(this.usersService.findAll())

    return `This action will create new user: ${name} has ${age} year(s) and has a beard: ${hasBeard ? 'yes3' : 'no'}.`
    // Database operations here.
  }
}
