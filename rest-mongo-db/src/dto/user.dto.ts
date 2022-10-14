import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Group } from "src/schemas/group.schema";

export class CreateUserDto {

    @IsNumber()
    @IsNotEmpty()
    readonly Id: number;

    @IsNotEmpty()
    readonly group: Group;
    
    @IsString()
    @IsNotEmpty()
    readonly name: number;

    @IsNumber()
    @IsNotEmpty()
    readonly age: number;
}