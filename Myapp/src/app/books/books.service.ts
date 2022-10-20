import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        name:  'Clean Code',
        author:  ' Robert C. Martin',
        image:  'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
        amount:  700
      },
      {
        name:  'Pragmatic Programmer',
        author: 'David Thomas',
        image: 'https://m.media-amazon.com/images/I/51IA4hT6jrL._SX380_BO1,204,203,200_.jpg',
        amount:  800
      }, 
      {
        name:  'Harry Potter e a Pedra Filosofal: 1',
        author: 'J.K. Rowling ',
        image: 'https://m.media-amazon.com/images/I/41897yAI4LL._SX346_BO1,204,203,200_.jpg',
        amount:  325
      },
      {
        name:  'O Senhor dos Anéis: A Sociedade do Anel',
        author: 'J.R.R. Tolkien ',
        image: 'https://m.media-amazon.com/images/I/41RBd2DvmgL._SX325_BO1,204,203,200_.jpg',
        amount:  298
      }
    ]
  }
}
