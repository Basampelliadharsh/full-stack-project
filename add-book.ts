import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { BookService } from '../services/book';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css'
})
export class AddBookComponent {

  title = '';
  author = '';

  constructor(private bookService: BookService) {}

  addBook() {
    const bookData = {
      title: this.title,
      author: this.author
    };

    this.bookService.addBook(bookData).subscribe(() => {
      alert('Book Added Successfully!');
      this.title = '';
      this.author = '';
    });
  }
}