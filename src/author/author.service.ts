import { Injectable } from '@nestjs/common';
// import authors from 'src/data/authors';
import { Author, AuthorDocument } from './author.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
@Injectable()
export class AuthorService {
  authors: Partial<Author>[];

  constructor(
    @InjectModel(Author.name) private authorModel: Model<AuthorDocument>,
  ) {
    // this.authors = authors;
  }
  async findMany() {
    return this.authorModel.find().lean();
    //
    return this.authors;
  }

  async createAuthor(input) {
    const _id = new Types.ObjectId();
    return this.authorModel.create({ _id, ...input });
  }
  async findById(id) {
    return this.authorModel.findById(id).lean();
    //
    return this.authors.find((a) => a._id === id);
  }
}
