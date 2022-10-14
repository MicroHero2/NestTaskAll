import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User, UserSchema } from './schemas/user.schema'
import { UserService } from './service/user.service';
import { GroupService } from './service/group.service';
import { UserController } from './controller/user.controller';
import { GroupController } from './controller/group.controller';
import { Group, GroupSchema } from './schemas/group.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema}, { name: Group.name, schema: GroupSchema}]),
  MongooseModule.forRoot('mongodb://localhost:27017')
  ],
  controllers: [AppController, UserController, GroupController],
  providers: [AppService, UserService, GroupService]
})
export class AppModule {}
