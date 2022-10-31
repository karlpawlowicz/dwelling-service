import { Server } from 'http';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { eventContext } from 'aws-serverless-express/middleware';
import { ValidationPipe } from '@nestjs/common';
import { createServer, proxy } from 'aws-serverless-express';
import { Context, Handler } from 'aws-lambda';

import { AppModule } from './app.module';

let cachedServer: Server;
const express = require('express');
const binaryMimeTypes: string[] = [];

process.on('unhandledRejection', (reason) => {
  console.error(reason);
});

process.on('uncaughtException', (reason) => {
  console.error(reason);
});

async function bootstrap(): Promise<Server> {
  if (!cachedServer) {
    try {
      const expressApp = express();
      const app = await NestFactory.create(
        AppModule,
        new ExpressAdapter(expressApp),
      );

      app.enableCors();
      app.use(eventContext());
      app.useGlobalPipes(new ValidationPipe());
      await app.init();

      cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  return Promise.resolve(cachedServer);
}

export const handler: Handler = async (event: any, context: Context) => {
  cachedServer = await bootstrap();

  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
