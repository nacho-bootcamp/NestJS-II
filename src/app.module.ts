import { Module } from '@nestjs/common';
import { BooksMdule } from './module/Books/Books.module';

@Module({
  imports: [BooksMdule],
  controllers: [],
  providers: [],
})
export class AppModule { }
