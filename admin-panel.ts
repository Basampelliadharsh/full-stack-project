import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './admin-panel.html',
  styleUrls: ['./admin-panel.css']
})
export class AdminPanelComponent implements OnInit {

  books: any[] = [];

  totalBooks = 0;
  issuedBooks = 0;
  students = 0;
  recentBooks: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe((data: any) => {
      this.books = data;

      // Dashboard values
      this.totalBooks = data.length;
      this.recentBooks = data.slice(-5); // last 5 books

      // demo values (since you don't have issue/student system yet)
      this.issuedBooks = 2;
      this.students = 10;
    });
  }
}