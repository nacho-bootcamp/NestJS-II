import { Module } from "@nestjs/common";
import { BooksControllers } from "./Books.controller";
import { BooksService } from "./Books.service";

@Module({
  imports: [], // le queremos dar a este modulo alguna funcionalidad externa
  controllers: [BooksControllers],//Los controladores
  providers: [BooksService],//Proveedores, para nosotros principalmente los sevicios
  exports: []//Si quiero qie este modulo exporte alguna funcionalidad que le es propia
})
export class BooksMdule { }