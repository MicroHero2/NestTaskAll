import { Document } from 'mongoose';
import { Group } from 'src/schemas/group.schema';

export interface IUser extends Document{
    readonly Id: number;
    readonly group: Group;
    readonly name: string;
    readonly age: number;
}