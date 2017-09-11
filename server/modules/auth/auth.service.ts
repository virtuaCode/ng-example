import * as jwt from 'jsonwebtoken';
import { Component, HttpStatus } from "@nestjs/common";
import { HttpException } from "@nestjs/core";
import { Login } from "../../models/login";
import { Token } from "../../models/token";
import { UserService } from "../user/user.service";
import { User } from "../../models/user";
import { UserCreate } from "../../models/user-create";
import * as bcrypt from "bcrypt";
const JWT_KEY = process.env.JWT_KEY || "secret";


@Component()
export class AuthService {

    constructor(private userService: UserService) { }

    async login(login: Login): Promise<Token> {
        const user: User = await this.userService.getUserByName(login.username);

        const valid: boolean = await this.checkPassword(login.password, user.password, user.salt);

        if (!valid)
            throw new HttpException("User Authentication failed", 401);

        return await this.createToken(user);;
    }


    async register(newUser: UserCreate): Promise<Token> {
        console.log(JWT_KEY);
        let user;
        try {
            user = await this.userService.addUser(newUser);
        } catch (error) {
            throw new HttpException("User registration failed", 500);
        }

        return await this.createToken(user);
    }

    private async createToken(user: User): Promise<Token> {
        const id: number = user.id;
        const username: string = user.username;
        try {
            return await this.signJwt(id, username);
        } catch (error) {
            throw new HttpException("User authentication failed", 500);
        }
        
    }

    private async checkPassword(password: string, hash: string, salt: string) {
        try {
            return hash === await this.hash(password, salt);
        } catch (error) {
            throw new HttpException("User authentication failed", 500);
        }
    }

    private hash(password, salt): Promise<string> {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if (err)
                    reject(err);
                else
                    resolve(hash);
            })
        });
    }

    private signJwt(id: number, username: string): Promise<Token> {
        return new Promise((resolve, reject) => {
            jwt.sign({ id, username }, JWT_KEY, function (err, token) {
                if (err)
                    return reject(err);

                return resolve({ token });
            });
        });
    }
}