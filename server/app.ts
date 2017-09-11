import * as express from 'express';
import * as bodyParser from "body-parser";
import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from "./modules/app.module";

const instance = express();
instance.use(bodyParser.json());
instance.use(express.static(path.join(__dirname, 'public')));
const app = NestFactory.create(ApplicationModule, instance);
app.setGlobalPrefix('api');
app.listen(3000, () => console.log('Application is listening on port 3000'));