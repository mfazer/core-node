// Nest:
import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  Post,
  // Put,
  // Res,
  ValidationPipe,
} from '@nestjs/common'
// Library specific response. Not recommended:
// import { Response } from 'express'

// DTOs:
import { CreateUserDTO } from './dto/users.dto'

// Services:
import { ConfigService } from './../common/services/config.service'
import { UsersService } from './users.service'

// Types:
import {
  IErrorBody,
  IResponseBody,
} from '../common/interfaces/response.interface'

// Validation:
// import { ValidationPipe } from './../common/pipes/validation.pipe'

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly config: ConfigService,
  ) {}
  @Get()
  async getAll() {
    throw new ForbiddenException()
  }
  @Post()
  // @Put()
  async create(
    // @Res() res: Response,
    @Body(
      new ValidationPipe({
        forbidNonWhitelisted: true,
        whitelist: true,
        forbidUnknownValues: true,
        // validationError: { value: false, target: false },
        // disableErrorMessages: true,
        // dismissDefaultMessages: true,
        exceptionFactory: (errors) => {
          const errorBody: IErrorBody = {
            error: true,
            type: 'ValidationPipeError',
            msgNotify: 'Sorry, but data object sent is incorrect.',
            msgConsole: errors,
          }
          return new HttpException(errorBody, HttpStatus.BAD_REQUEST)
        },
      }),
    )
    initUser: CreateUserDTO,
  ): Promise<Error | IResponseBody> {
    const dbUser: string = this.config.get('MONGO_DB_USER')
    console.log('TCL: UsersController -> dbUser', dbUser)
    try {
      const body: IResponseBody = await this.usersService.create(initUser)
      // return new HttpException(body, HttpStatus.CREATED)
      return body
    } catch (error) {
      throw new HttpException(error, HttpStatus.CONFLICT)
    }
  }
}
