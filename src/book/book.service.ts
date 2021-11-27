import { Injectable } from '@nestjs/common';
import books from 'src/data/books';
import { Book, CreateBookInput } from './book.schema';

@Injectable()
export class BookService {
  books: Partial<Book>[];

  constructor() {
    this.books = books;
  }
  async findMany() {
    return books;
  }

  async findById(id: number) {
    const foundBooks = this.books.filter((book) => book.id === id);
    return foundBooks.length ? foundBooks[0] : null;
  }

  async findByAuthok(authorId: number) {
    const foundBooks = this.books.filter((book) => book.author === authorId);
    return foundBooks.length ? foundBooks[0] : null;
  }

  async createBook(book: CreateBookInput) {
    this.books = [book, ...this.books];
    return book;
  }
}
