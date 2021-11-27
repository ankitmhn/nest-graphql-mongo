import { Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.schema';
import { BookService } from './book.service';

@Resolver()
export class BookResolver {
  constructor(private bookService: BookService) {}
  @Query(() => [Book])
  async books() {
    return this.bookService.findMany();
  }
}
