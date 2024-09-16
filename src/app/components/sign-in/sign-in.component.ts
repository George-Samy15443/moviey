import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule,
    CommonModule, RouterLink
  ],
  templateUrl: './sign-in.component.html',
  styles: ``
})
export class SignInComponent {
  username: string = "";
  password: string = "";

  user: string = "george";
  pass: string = "1234";

  constructor(private _router: Router) { }

  Login() {
    alert(`Hello ${this.username}`);
    this._router.navigate(["/home"]);
  }

}
