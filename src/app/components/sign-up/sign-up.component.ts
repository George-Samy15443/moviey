import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './sign-up.component.html',
  styles: ``
})
export class SignUpComponent {
  registerData = new FormGroup(
    {
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
    }
  )



  get name() {
    return this.registerData.get('username')?.errors
  }
  get email() {
    return this.registerData.get('email')?.errors
  }
  get password() {
    return this.registerData.get('password')?.errors
  }
  get phone() {
    return this.registerData.get('phone')?.errors
  }

  signup() {
    console.log(this.registerData.value);
    alert("register successfully")

  }
}
