// Swagger:
// import { ApiModelProperty } from '@nestjs/swagger'

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
export class CreateNewUserDTO {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Length(4, 32)
  @Matches(/^[\w\d-._]+$/, 'is')
  readonly nick: string

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Length(4, 64)
  readonly name: string

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Length(4, 64)
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
