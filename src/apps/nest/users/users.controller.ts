// Nest:
import {
  Body,
  // Get,
  Controller,
  Post,
} from '@nestjs/common'

// DTOs:
import { CreateNewUserDTO } from './dto/users.dto'

// Services:
import { UsersService } from './users.service'

// Types:
// import { IUser } from './users.types'

// Utils:
import * as pino from 'pino'
const logger = pino({ prettyPrint: true })

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
  @Post()
  async createNewUser(@Body() initUser: CreateNewUserDTO /*Payloads.Post.ICreateNewUser*/): Promise<string> {
    const { age, name, hasBeard } = initUser
    this.usersService.create(initUser)
    console.log(this.usersService.findAll())

    logger.info('Name:', name, 'Age:', age, 'Beard:', hasBeard ? 'yes' : 'no')

    return `This action will create new user: ${name} has ${age} year(s) and has a beard: ${hasBeard ? 'yes' : 'no'}.`
    // Database operations here.
  }
}
