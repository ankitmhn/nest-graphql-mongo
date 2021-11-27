import { ID, ObjectType, Field } from '@nestjs/graphql';
import { Book } from 'src/book/book.schema';

@ObjectType()
export class Author {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [Book])
  books: Book[];
}
