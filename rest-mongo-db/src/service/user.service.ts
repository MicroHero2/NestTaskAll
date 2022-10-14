import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from 'src/dto/user.dto';
import { IUser } from 'src/interfaces/user.interface';
import { Model } from "mongoose";
import { UpdateUserDto } from 'src/dto/updateuser.dto';
@Injectable()
export class UserService {
constructor(@InjectModel('User') private userModel:Model<IUser>) { }
async createUser(createUsertDto: CreateUserDto): Promise<IUser> {
   const newUser = await new this.userModel(CreateUserDto);
   return newUser.save();
}
async updateUser(userId: string, updateUsertDto: UpdateUserDto): Promise<IUser> {
    const existingUser = await this.userModel.findByIdAndUpdate(userId, UpdateUserDto, { new: true });
   if (!existingUser) {
     throw new NotFoundException(`User #${userId} not found`);
   }
   return existingUser;
}
async getAllUsers(): Promise<IUser[]> {
    const UserData = await this.userModel.find();
    if (!UserData || UserData.length == 0) {
        throw new NotFoundException('Users data not found!');
    }
    return UserData;
}
async getUser(userId: string): Promise<IUser> {
   const existingUser = await this.userModel.findById(userId).exec();
   if (!existingUser) {
    throw new NotFoundException(`User #${userId} not found`);
   }
   return existingUser;
}
async deleteUser(userId: string): Promise<IUser> {
    const deletedUser = await this.userModel.findByIdAndDelete(userId);
   if (!deletedUser) {
     throw new NotFoundException(`User #${userId} not found`);
   }
   return deletedUser;
}
}