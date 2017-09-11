import { HttpException } from '@nestjs/core';
import { Middleware, NestMiddleware, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import * as jwt from 'express-jwt';
const JWT_KEY = process.env.JWT_KEY || "secret";

@Middleware()
export class AuthMiddleware implements NestMiddleware {
    constructor(private usersService: UserService) {}

    resolve(): (req, res, next) => void {
        return jwt({secret: JWT_KEY});
    }
}