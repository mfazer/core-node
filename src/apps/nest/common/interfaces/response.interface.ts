interface IMessages {
  msgDialog?: string
  msgNotify?: string
  msgConsole?: any
}
type TErrorType = 'MongoError' | 'NodeServerError' | 'ValidationPipeError'
type TData = object
export interface ICreateError extends IMessages {
  type: TErrorType
}
export interface ICreateSuccess extends IMessages {
  data?: TData
}
export interface IErrorBody extends IMessages {
  error: true
  type: TErrorType
}
export interface ISuccessBody extends IMessages {
  success: true
  data?: TData
}
export type IResponseBody = ISuccessBody | IErrorBody
