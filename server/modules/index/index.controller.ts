import { Controller, Get, Post, HttpStatus } from '@nestjs/common';
import { Res, Param, Body } from '@nestjs/common';
import { Response } from "express";
import * as path from "path";

@Controller()
export class IndexController {

    constructor() { }

    @Get()
    public async getIndex( @Res() res: Response) {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    }
}