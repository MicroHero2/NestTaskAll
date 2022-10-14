import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { User } from "src/schemas/user.schema";

export class CreateGroupDto {

    @IsNumber()
    @IsNotEmpty()
    readonly Id: number;

    @IsNotEmpty()
    readonly User: User;
    
    @IsString()
    @IsNotEmpty()
    readonly name: string;

}