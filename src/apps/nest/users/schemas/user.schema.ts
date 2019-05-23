import * as mongoose from 'mongoose'
// import { regExps } from 'src/constants'
import { regExp } from '../../../../constants'

export const UserSchema = new mongoose.Schema({
  nick: {
    type: String,
    required: true,
    index: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: new RegExp(regExp.nick.pattern, regExp.nick.flags),
  },
  name: {
    type: String,
    required: true,
    index: false,
    unique: false,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
})
