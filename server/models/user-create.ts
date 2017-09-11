import { Matches, MinLength, MaxLength } from "class-validator";

export class UserCreate {

    @MaxLength(25)
    displayname: string

    @MinLength(5)
    @Matches(/^[a-z0-9]*$/i)
    username: string
    
    @MinLength(8)
    password: string
}