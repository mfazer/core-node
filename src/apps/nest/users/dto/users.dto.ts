// Swagger:
import { ApiModelProperty } from '@nestjs/swagger'

// Validation:
import { IsBoolean, IsInt, IsString, Length, Max, Min, ValidateIf } from 'class-validator'

// Data Transfer Object(s):
export class CreateNewUserDTO {

  @IsString()
  @Length(10, 20)
  readonly name: string

  @ApiModelProperty({ maximum: 300, multipleOf: 1 })
  @IsInt()
  @Min(0)
  @Max(300)
  readonly age: number

  @ValidateIf(o => o.age > 150)
  @IsBoolean()
  readonly hasBeard: boolean
}
