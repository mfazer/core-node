// Swagger:
import { ApiModelProperty } from '@nestjs/swagger'

// Data Transfer Object(s):
export class CreateNewUserDTO {

  readonly name: string

  @ApiModelProperty({ maximum: 3, multipleOf: 1 })
  readonly age: number

  readonly hasBeard: boolean
}
