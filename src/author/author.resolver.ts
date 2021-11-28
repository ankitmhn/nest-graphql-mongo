import { Query, Resolver } from '@nestjs/graphql';
import { Author } from './author.schema';
import { AuthorService } from './author.service';

@Resolver()
export class AuthorResolver {
  constructor(private authorService: AuthorService) {}

  @Query(() => [Author])
  async authors() {
    //   return this.authorService.
  }
}
