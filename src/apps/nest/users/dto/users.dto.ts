// Swagger:
// import { ApiModelProperty } from '@nestjs/swagger'

// Constants:
// import { regExps } from 'src/constants'
import { validation } from './../../../../constants'
const { nick, name, email } = validation

// Validation:
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator'

// Data Transfer Object(s):
export class CreateUserDTO {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Length(nick.minLength, nick.maxLength)
  @Matches(nick.regExp.pattern, nick.regExp.flags)
  readonly nick: string

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Length(name.minLength, name.maxLength)
  readonly name: string

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Length(email.minLength, email.maxLength)
  @IsEmail()
  readonly email: string

  /* @ApiModelProperty({ maximum: 300, multipleOf: 1 })
  @IsInt()
  @Min(0)
  @Max(300)
  readonly age: number

  @ValidateIf(o => o.age > 150)
  @IsBoolean()
  readonly hasBeard: boolean */
}
