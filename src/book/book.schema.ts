import { ObjectType, Field, ID, Int, InputType } from '@nestjs/graphql';
import { Author } from 'src/author/author.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type BookDocument = Book & mongoose.Document;
@Schema() //mongodb schema
@ObjectType()
export class Book {
  @Field(() => ID)
  _id: number;

  @Prop({ required: true }) //mongodb collection
  @Field() //graphql field
  title: string;

  @Prop({ required: true })
  @Field()
  isbn: string;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: Author.name,
  })
  @Field(() => Author)
  author: Author | number;
}

export const BookSchema = SchemaFactory.createForClass(Book); //create the mongodb schema

BookSchema.index({ author: 1 });

@InputType()
export class CreateBookInput {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  isbn: string;

  @Field(() => Int)
  author: number;
}

@InputType()
export class FindBookInput {
  @Field(() => Int)
  id: number;
}
