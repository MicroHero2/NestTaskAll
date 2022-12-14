import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { User, UserDocument } from './user.model';
import {
  CreateUserInput,
  ListUserInput,
  UpdateUserInput,
} from './user.inputs';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
  ) {}

  create(payload: CreateUserInput) {
    const createdUser = new this.UserModel(payload);
    return createdUser.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.UserModel.findById(_id).exec();
  }

  list(filters: ListUserInput) {
    return this.UserModel.find({ ...filters }).exec();
  }

  update(payload: UpdateUserInput) {
    return this.UserModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.UserModel.findByIdAndDelete(_id).exec();
  }
}
