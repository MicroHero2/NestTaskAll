import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateGroupDto } from 'src/dto/group.dto';
import { IGroup } from 'src/interfaces/group.interface';
import { Model } from "mongoose";
import { UpdateGroupDto } from 'src/dto/updategroup.dto';

@Injectable()
export class GroupService {
constructor(@InjectModel('Group') private groupModel:Model<IGroup>) { }
async createGroup(CreateGroupDto: CreateGroupDto): Promise<IGroup> {
   const newGroup = await new this.groupModel(CreateGroupDto);
   return newGroup.save();
}
async updateGroup(groupId: string, updateGroupDto: UpdateGroupDto): Promise<IGroup> {
    const existingGroup = await this.groupModel.findByIdAndUpdate(groupId, UpdateGroupDto, { new: true });
   if (!existingGroup) {
     throw new NotFoundException(`Group #${groupId} not found`);
   }
   return existingGroup;
}
async getAllGroups(): Promise<IGroup[]> {
    const GroupData = await this.groupModel.find();
    if (!GroupData || GroupData.length == 0) {
        throw new NotFoundException('Groups data not found!');
    }
    return GroupData;
}
async getGroup(groupId: string): Promise<IGroup> {
   const existingGroup = await this.groupModel.findById(groupId).exec();
   if (!existingGroup) {
    throw new NotFoundException(`Group #${groupId} not found`);
   }
   return existingGroup;
}
async deleteGroup(groupId: string): Promise<IGroup> {
    const deletedGroup = await this.groupModel.findByIdAndDelete(groupId);
   if (!deletedGroup) {
     throw new NotFoundException(`Group #${groupId} not found`);
   }
   return deletedGroup;
}
}