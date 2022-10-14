import { Document } from 'mongoose';
import { User } from 'src/schemas/user.schema';

export interface IGroup extends Document{
    readonly Id: number;
    readonly User: User;
    readonly name: string;
}