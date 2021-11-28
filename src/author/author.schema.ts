import { ID, ObjectType, Field, InputType } from '@nestjs/graphql';
import { Book } from 'src/book/book.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type AuthorDocument = Author & mongoose.Document;
@Schema()
@ObjectType()
export class Author {
  @Prop()
  @Field(() => ID)
  _id: string;

  @Prop()
  @Field()
  name: string;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' } })
  @Field(() => [Book], { nullable: true })
  books: Book[];
}

export const AuthorSchema = SchemaFactory.createForClass(Author);

@InputType()
export class CreateAuthorInput {
  @Field()
  name: string;
}
