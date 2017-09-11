import { validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, MinLength, Matches, MaxLength } from "class-validator";

export class User {
    @IsInt()
    @Min(1)
    id: number

    @MinLength(5)
    @Matches(/^[a-z0-9]*$/i)
    username: string

    @MaxLength(25)
    displayname: string

    salt: string
    password: string

    created: Date
}