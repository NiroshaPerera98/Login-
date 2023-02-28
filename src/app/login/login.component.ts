import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  // Declare variables to store username and password
  username!: string;
  password!: string;

  // Update the onSubmit() method to take in an event argument
  onSubmit(event: Event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Hard-coded user object
    const user = {
      username: 'john',
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
