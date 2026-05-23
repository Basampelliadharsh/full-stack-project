import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { BooksComponent } from './books/books';
import { AddBookComponent } from './add-book/add-book';
import { BookService } from './book';
import { StudentLoginComponent } from './student-login/student-login';
import { SearchBooksComponent } from './search-books/search-books';
import { AdminPanelComponent } from './admin-panel/admin-panel';

export const routes: Routes = [
   { path: '', component: Homepage },
  { path: 'homepage', component: Homepage },
  { path: 'books', component: BooksComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'search-books', component: SearchBooksComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
