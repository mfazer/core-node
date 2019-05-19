// tslint:disable-next-line: no-implicit-dependencies
import { ObjectId } from 'mongodb'

export interface IUser<T> {
  id: T extends 'Mongo' ? ObjectId : string
  errors?: T extends 'Mongo' ? boolean : undefined
  // _id: ObjectId // BSON type for MongoDB format.
  // id: string // String for JSON format.
  nick: string
  name: string
  email: string // Unit: cm.
}
