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
import { ConfigService } from './../common/services/config.service'
import { UsersService } from './users.service'

// Types:
import { IResBody } from '../common/interfaces/nest.interface'

// Validation:
// import { ValidationPipe } from './../common/pipes/validation.pipe'

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly config: ConfigService,
  ) {}
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
    const dbUser: string = this.config.get('MONGO_DB_USER')
    console.log('TCL: UsersController -> dbName', dbUser)

    // const { name, nick, email } = initUser
    const success: IResBody = await this.usersService.create(initUser)
    return success
  }
}
