import { Injectable } from "@nestjs/common";
import { BooksEntity } from "./entities/Books.entity";
import { CreateBookDto } from './dtos/books.dto';

@Injectable()
export class BooksService {
  stock: BooksEntity[]
  constructor() {
    this.stock = [{
      id: 1,
      nombre: "una vida",
      autor: "arjona"
    }]
    this.stock = [{
      id: 2,
      nombre: "una vida2",
      autor: "arjona"
    }]
    this.stock = [{
      id: 3,
      nombre: "una vida3",
      autor: "arjona"
    }]
  }

  //funcion aqui abajo

  async findAllBooks(): Promise<BooksEntity[]> { // esta funcion va a devolver una promesa que se resulve a un
    //array de libros
    return this.stock
  }

  async createBooks(createBookDto: CreateBookDto): Promise<BooksEntity> {
    const newBooks: BooksEntity = {
      id: this.stock.length + 1,
      nombre: createBookDto.nombre,
      autor: createBookDto.autor,
    }
    this.stock.push(newBooks)
    return newBooks
  }
}


