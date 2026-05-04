import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-login.html',
  styleUrl: './student-login.css'
})
export class StudentLoginComponent {

  email: string = '';
  password: string = '';

  login() {
    if (this.email === '' || this.password === '') {
      alert('Please fill all fields');
    } else {
      alert('Login Successful');
    }
  }

}