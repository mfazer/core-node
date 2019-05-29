import {
  ICreateError,
  ICreateSuccess,
  IErrorBody,
  ISuccessBody,
} from '../interfaces/response.interface'

export class ResponseService {
  public success(I?: ICreateSuccess): ISuccessBody {
    return {
      success: true,
      ...I,
    }
  }
  public error(I: ICreateError): IErrorBody {
    return {
      error: true,
      ...I,
    }
  }
}
