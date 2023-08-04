import { Controller, Get } from "@nestjs/common";
import { BooksService } from "./Books.service";

@Controller("books") // va la ruta de navegacion
export class BooksControllers {
  constructor(private bookservice: BooksService) { }
  @Get()
  todos() {
    const books = this.bookservice.findAllBooks()
    return books
  }
}