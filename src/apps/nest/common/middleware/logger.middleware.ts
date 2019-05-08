import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

// Utils:
import * as pino from 'pino'
const logger = pino({ prettyPrint: true })

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // use(req: Request, res: Response, next: () => void) {
  use(req: Request, res: Response, next: NextFunction) {
    // logger.info('Name:', name, 'Age:', age, 'Beard:', hasBeard ? 'yes!' : 'no!')
    logger.info('Middleware logger:', new Date())
    next()
  }
}
