/* // Nest:
import { Injectable, NestMiddleware } from '@nestjs/common'

import { NextFunction, Request, Response } from 'express'

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    debugger
    console.log('Request...', ' IPv6:', req.ip)
    next()
  }
}
 */