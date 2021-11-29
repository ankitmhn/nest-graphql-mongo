import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
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
    ref: 'Author',
  })
  @Field(() => Author)
  author: Author | string;
}

export const BookSchema = SchemaFactory.createForClass(Book); //create the mongodb schema

// BookSchema.index({ author: 1 });

@InputType()
export class CreateBookInput {
  @Field()
  title: string;

  @Field()
  isbn: string;

  @Field()
  author: string;
}

@InputType()
export class FindBookInput {
  @Field()
  id: string;
}
