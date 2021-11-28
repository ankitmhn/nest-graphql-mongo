import { Injectable } from '@nestjs/common';
import authors from 'src/data/authors';
import { Author } from './author.schema';
@Injectable()
export class AuthorService {
  authors: Partial<Author>[];

  constructor() {
    this.authors = authors;
  }
  async findMany() {
    return this.authors;
  }

  async findById(id) {
    return this.authors.find((a) => a.id === id);
  }
}
