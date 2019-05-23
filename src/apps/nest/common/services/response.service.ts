import { IErrorBody, ISuccessBody } from '../interfaces/response.interface'

export class ResponseService {
  public success(I?: ISuccessBody): ISuccessBody & { success: true } {
    return {
      success: true,
      ...I,
    }
  }
  public error(I: IErrorBody): IErrorBody & { error: true } {
    return {
      error: true,
      ...I,
    }
  }
}
