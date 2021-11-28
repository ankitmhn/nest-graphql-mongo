import { Injectable } from '@nestjs/common';
import books from 'src/data/books';
import { Book, CreateBookInput, BookDocument } from './book.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  books: Partial<Book>[];

  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {
    this.books = books;
  }
  async findMany() {
    return this.bookModel.find().lean();
  }

  async findById(id: number) {
    return this.bookModel.findById(id).lean();
    //
    const foundBooks = this.books.filter((book) => book._id === id);
    return foundBooks.length ? foundBooks[0] : null;
  }

  async findByAuthorId(authorId: number) {
    return this.bookModel.find({ author: authorId }); //this field needs to be made an index
    //
    const foundBooks = this.books.filter((book) => book.author === authorId);
    return foundBooks.length ? foundBooks : null;
  }

  async createBook(book: CreateBookInput) {
    this.books = [book, ...this.books];
    return book;
  }
}
