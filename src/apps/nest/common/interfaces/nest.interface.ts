// TODO:
// Turn it into a NestJS module.
// Use also a flat response interface object eg. msg_notify msg_console msg_dialog

interface IMessages {
  dialog?: string
  notification?: string
  console?: any
}
interface IRes {
  messages: IMessages
}
type TErrorType = 'MongoError' | 'NodeServerError'
interface IErrorBody extends IRes {
  error: true
  type: TErrorType
}
type TData = object | null
interface ISuccessBody extends IRes {
  success: true
  data: TData
}
export type IResBody = ISuccessBody | IErrorBody
export class ResBody {
  private messages(I: IMessages): IMessages {
    const msg = I || {}
    return {
      dialog: msg.dialog || null,
      notification: msg.notification || null,
      console: msg.console || null,
    }
  }
  public success(I?: { data?: TData; messages?: IMessages }): ISuccessBody {
    const body = I || {}
    const result: ISuccessBody = {
      success: true,
      data: body.data || null,
      messages: this.messages(body.messages),
    }
    return result
  }
  public error(I: { type: TErrorType; messages?: IMessages }): IErrorBody {
    const body = I
    const result: IErrorBody = {
      error: true,
      type: body.type,
      messages: this.messages(body.messages),
    }
    return result
  }
}
