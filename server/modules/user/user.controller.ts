import { Controller, Get, Post, HttpStatus } from '@nestjs/common';
import { Res, Param, Body, UsePipes, Dependencies } from '@nestjs/common';
import { Response } from "express";
import { UserService } from "./user.service";
import { UserPublic } from "../../models/user-public";


@Controller('users')
@Dependencies(UserService)
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    public async getAllUsers( @Res() res: Response) {
        const users: UserPublic[] = await this.userService.getAllUsers();
        res.json(users);
    }

    @Get(':id')
    public async getUser( @Res() res: Response, @Param("id") id) {
        const user: UserPublic = await this.userService.getUserById(+id);
        res.json(user);
    }
}