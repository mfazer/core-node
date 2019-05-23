import { Global, Module } from '@nestjs/common'
import { ResponseService } from '../services/response.service'

@Global()
@Module({
  providers: [ResponseService],
  exports: [ResponseService],
})
export class ResponseModule {}
