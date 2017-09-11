import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';

import * as bcrypt from "bcrypt";
import { User } from "../../models/user";
import { UserCreate } from "../../models/user-create";
import { UserPublic } from "../../models/user-public";

@Component()
export class UserService {
    private users: User[] = [];
    
    getAllUsers(): Promise<User[]> {
        return Promise.resolve(this.users);
    }

    getUserById(id: number): Promise<User>{
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            throw new HttpException("User not found", 404);
        }
        return Promise.resolve(user);
    }

    getUserByName(username: string): Promise<User>{
        const user = this.users.find((user) => user.username === username);
        if (!user) {
            throw new HttpException("User not found", 404);
        }
        return Promise.resolve(user);
    }

    public async addUser(user: UserCreate): Promise<User> {

        const exists = await this.users.some(({username}) => username == user.username);

        if(exists)
            throw new HttpException("User creation failed", 500);

        if(user.displayname.length === 0)
            user.displayname = user.username;

        const maxId = this.users.reduce((a, b) => Math.max(a, b.id), 0);

        const saltRounds = 10;

        let salt;

        try {
            salt = await this.salt(saltRounds);
        } catch (error) {
            throw new HttpException("User creation failed", 500);
        }

        let hash;
        
        try {
            hash = await this.hash(user.password, salt);
        } catch (error) {
            throw new HttpException("User creation failed", 500);
        }

        const newUser: User = {
            id: maxId + 1,
            username: user.username,
            displayname: user.displayname,
            salt: salt,
            password: hash,
            created: new Date()
        }

        this.users.push(newUser);

        return Promise.resolve(newUser);
    }

    private salt(saltRounds): Promise<string> {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(saltRounds, (err, salt) => {
                if (err)
                    reject(err);
                else
                    resolve(salt);
            })
        });
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
}