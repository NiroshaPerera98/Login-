import { Component,OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  {
  username: string;
  password: string;

  onSubmit() {
    // Hard-coded user object
    const user = {
      username: 'john.doe',
      password: 'password123',
    };

    // Compare user input with hard-coded user object
    if (this.username === user.username && this.password === user.password) {
      // Grant access
      console.log('Login successful!');
    } else {
      // Deny access
      console.log('Login failed. Please try again.');
    }
  }
}
