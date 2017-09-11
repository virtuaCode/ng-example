import { Controller, Get, Post, HttpStatus } from '@nestjs/common';
import { Res, Param, Body, Dependencies, UsePipes } from '@nestjs/common';
import { Response } from "express";
import { AuthService } from "./auth.service";
import { UserService } from "../user/user.service";
import { Login } from "../../models/login";
import { ValidatorPipe } from "../../pipes/validator.pipe";
import { UserCreate } from "../../models/user-create";
import { UserPublic } from "../../models/user-public";
import { Token } from "../../models/token";

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
        private userService: UserService
    ) { }

    @Post('login')
    public async loginUser( @Res() res: Response, @Body() login: Login) {
        const token: Token = await this.authService.login(login);
        res.json(token);
    }

    @Post('register')
    @UsePipes(new ValidatorPipe())
    public async registerUser( @Res() res: Response, @Body() user: UserCreate) {
        const token: Token = await this.authService.register(user);
        res.status(HttpStatus.CREATED).json(token);
    }
}