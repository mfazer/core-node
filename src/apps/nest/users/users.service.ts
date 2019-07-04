import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

// DTOs:
import { CreateUserDTO } from './dto/users.dto'

// Types:
import { IUser } from './interfaces/users.interface'

// Services:
import { ResponseService } from './../common/services/response.service'

// Types:
import {
  // IResponseBody,
  IErrorBody,
  ISuccessBody,
} from './../common/interfaces/response.interface'

// Object Data Modeling (ODM):
import { Model } from 'mongoose'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('users') private readonly userModel: Model<IUser<void>>,
  ) {}
  async create(
    createUserDTO: CreateUserDTO,
  ): Promise<ISuccessBody | IErrorBody> {
    const userModel = new this.userModel(createUserDTO)
    try {
      /* const user: IUser<'Mongo'> =*/ await userModel.save()
      // console.log('TCL: UsersService -> user', user)
      /*
      const body: IResponseBody = new ResponseService().success({
        msg_notify: `User ${createUserDTO.name} has been successfully created.`,
      })
      */
      // return body
      const body: ISuccessBody = new ResponseService().success({
        msgDialog: 'OK',
      })
      return body
    } catch (error) {
      // throw new Error()
      const mongoError: Error = error
      const body: IErrorBody = new ResponseService().error({
        type: 'MongoError',
        msgConsole: mongoError.message,
        msgDialog: 'User with given data already exists.',
      })
      throw body
    }
  }
  /* async findAll(): Promise<IUser[]> {
    const users: IUser[] = await this.userModel.find().exec()
    return users
  } */

  /* private readonly cats: any = []
  private readonly beardSpeed: number = 12 // Unit: cm/yr.
  public create(initUser: CreateNewUserDTO): void {
    const { name, age } = initUser
    const newCat = { name, age, beardLength: this.beardSpeed * age }
    this.cats.push(newCat)
  }
  public findAll(): IUser[] {
    return this.cats
  } */
}
