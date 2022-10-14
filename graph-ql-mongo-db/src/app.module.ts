import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { GroupModule } from './Group/group.module';
import { UserModule } from './user/user.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/three-in-one-db'),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      debug: false,
      driver: ApolloDriver,
    }),
    GroupModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}