import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:5000/books';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(this.apiUrl);
  }

  addBook(book: any) {
    return this.http.post(this.apiUrl, book);
  }
}