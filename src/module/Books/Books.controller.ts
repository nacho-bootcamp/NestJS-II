import { Body, Controller, Get, Post } from "@nestjs/common";
import { BooksService } from "./Books.service";
import { BooksEntity } from "./entities/Books.entity";
import { CreateBookDto } from "./dtos/books.dto";

@Controller("books") // va la ruta de navegacion
export class BooksControllers {
  constructor(private bookservice: BooksService) { }
  @Get()
  //una funcion que va a devolver una promesa que se resolvera como un array de booksentity
  //dentro tenemos una variable de tipo array entity que es igual a this.bookservice.findAllBooks()
  async findAll(): Promise<BooksEntity[]> {
    const books: BooksEntity[] = await this.bookservice.findAllBooks()
    return books
  }

  @Post()

  async createBook(@Body() newBook: CreateBookDto): Promise<BooksEntity> {
    const newbook: BooksEntity = await this.bookservice.createBooks(newBook)
    return newbook
  }
}