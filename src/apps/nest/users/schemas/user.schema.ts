import * as mongoose from 'mongoose'
// import { regExps } from 'src/constants'
import { validation } from '../../../../constants'
const { nick, name, email } = validation

export const UserSchema = new mongoose.Schema({
  nick: {
    type: String,
    required: true,
    index: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: new RegExp(nick.regExp.pattern, nick.regExp.flags),
    minlength: nick.minLength,
    maxlength: nick.maxLength,
  },
  name: {
    type: String,
    required: true,
    index: false,
    unique: false,
    trim: true,
    minlength: name.minLength,
    maxlength: name.maxLength,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
    lowercase: true,
    trim: true,
    minlength: email.minLength,
    maxlength: email.maxLength,
  },
})
