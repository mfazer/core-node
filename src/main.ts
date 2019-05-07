// Nest:
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'

// Nest - modules:
import { NestAppModule } from './apps/nest/nest.app.module'

// Swagger:
import {
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger'

async function bootstrapNestApp() {
  const app = await NestFactory.create<NestExpressApplication>(NestAppModule)

  // Swagger:
  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  await app.listen(3000)
}
bootstrapNestApp()

// Express:
/* import * as express from 'express'

const bootstrapExpressApp = async () => {
  const app = await express()
  await app.listen(3001)
}
bootstrapExpressApp()
 */
