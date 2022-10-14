import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import * as dotenv from 'dotenv';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';

dotenv.config();

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: './schema.gql',
      debug: true,
      playground: true,
      driver: ApolloDriver
    }),
    TypeOrmModule.forRoot({
      keepConnectionAlive: true,
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
