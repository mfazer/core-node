interface IMessages {
  msg_dialog?: string
  msg_notify?: string
  msg_console?: any
}
type TErrorType = 'MongoError' | 'NodeServerError'
type TData = object | null
export interface ICreateError extends IMessages {
  type: TErrorType
}
export interface ICreateSuccess extends IMessages {
  data?: TData
}
export interface IErrorBody extends IMessages {
  error?: true
  type?: TErrorType
}
export interface ISuccessBody extends IMessages {
  success?: true
  data?: TData
}
export type IResponseBody = ISuccessBody & IErrorBody
