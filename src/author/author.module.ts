import { Module } from '@nestjs/common';
import { Book, BookSchema } from 'src/book/book.schema';
import { BookService } from 'src/book/book.service';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  providers: [AuthorResolver, AuthorService, BookService],
})
export class AuthorModule {}
