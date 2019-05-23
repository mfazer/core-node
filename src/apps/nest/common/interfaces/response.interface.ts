interface IMessages {
  msg_dialog?: string
  msg_notify?: string
  msg_console?: any
}
type TErrorType = 'MongoError' | 'NodeServerError'
export interface IErrorBody extends IMessages {
  // error: true
  type: TErrorType
}
type TData = object | null
export interface ISuccessBody extends IMessages {
  // success: true
  data?: TData
}
export type IResponseBody = ISuccessBody | IErrorBody
