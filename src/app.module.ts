import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
config();
console.log('Mongodb: ', process.env.MONGODB_URI);
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    AuthorModule,
    BookModule,
  ],
})
export class AppModule {}
