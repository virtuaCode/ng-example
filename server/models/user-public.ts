import { validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, MinLength, Matches, MaxLength } from "class-validator";

export class UserPublic {
    @IsInt()
    @Min(1)
    id: number

    @MaxLength(25)
    displayname: string

    @MinLength(5)
    @Matches(/^[a-z0-9]*$/i)
    username: string

    created: Date
}