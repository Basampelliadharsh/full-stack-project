import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../services/book';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './books.html',
  styleUrls: ['./books.css']
})
export class BooksComponent implements OnInit {

  books: any[] = [];
  selectedBook: any = null;

  newBook = {
    title: '',
    author: ''
  };

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe((data: any) => {
      this.books = data;
    });
  }

  showBook(book: any) {
    this.selectedBook = book;
  }

  addBook() {
    this.bookService.addBook(this.newBook).subscribe(() => {
      this.loadBooks();

      // clear form
      this.newBook = {
        title: '',
        author: ''
      };
    });
  }
}