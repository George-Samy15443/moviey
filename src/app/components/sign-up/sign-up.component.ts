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
  password1: string = "";
  password2: string = "";


  registerData = new FormGroup(
    {
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.pattern('/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')]),
      password1: new FormControl('', [Validators.required, Validators.pattern("/^[A-Za-z]\w{7,14}$/")]),
      phone: new FormControl('')
    }
  )


  signup() {
    console.log(this.registerData.value);

  }
}
