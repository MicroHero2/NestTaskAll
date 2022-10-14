import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { Group, GroupDocument } from './group.model';
import {
  CreateGroupInput,
  ListGroupInput,
  UpdateGroupInput,
} from './group.inputs';

@Injectable()
export class GroupService {
  constructor(
    @InjectModel(Group.name) private GroupModel: Model<GroupDocument>,
  ) {}

  create(payload: CreateGroupInput) {
    const createdGroup = new this.GroupModel(payload);
    return createdGroup.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.GroupModel.findById(_id).exec();
  }

  list(filters: ListGroupInput) {
    return this.GroupModel.find({ ...filters }).exec();
  }

  update(payload: UpdateGroupInput) {
    return this.GroupModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.GroupModel.findByIdAndDelete(_id).exec();
  }
}
