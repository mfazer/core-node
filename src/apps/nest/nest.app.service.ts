import { Injectable } from '@nestjs/common'
import { ConfigService } from './common/services/config.service'

@Injectable()
export class NestAppService {
  private isAuthEnabled: boolean
  constructor(config: ConfigService) {
    this.isAuthEnabled = config.get('IS_AUTH_ENABLED') === 'true'
  }
  getAuthEnabled(): boolean {
    return this.isAuthEnabled
  }
}
