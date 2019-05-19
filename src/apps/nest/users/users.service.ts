import {
  Injectable,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

// DTOs:
import { CreateUserDTO } from './dto/users.dto'

// Types:
import { IUser } from './interfaces/users.interface'

// Object Data Modeling (ODM):
import { Model } from 'mongoose'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('users') private readonly userModel: Model<IUser<void>>,
  ) { }
  async create(createUserDTO: CreateUserDTO): Promise<boolean> {
    const userModel = new this.userModel(createUserDTO)
    try {
      const user: IUser<'Mongo'> = await userModel.save()
      return !Boolean(user.errors)
    } catch (error) {
      return false
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
