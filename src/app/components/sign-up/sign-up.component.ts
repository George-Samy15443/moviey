import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styles: ``
})
export class SignUpComponent {
  cPass: string = '';
  signUpForm = new FormGroup ({
    userName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required,Validators.pattern("^01[0-2,5]{1}[0-9]{8}$")])
  })

  onSubmit(){
    console.log(this.signUpForm.value);
  }

  checkPassword(pass: string, cPass: string): boolean{
    return pass == cPass
  }

}
