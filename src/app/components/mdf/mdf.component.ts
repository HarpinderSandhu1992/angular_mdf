import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AvoidWord } from '../../avoid-word';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-mdf',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgIf],
  templateUrl: './mdf.component.html',
  styleUrl: './mdf.component.css',
})
export class mdfComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(5),
      AvoidWord,
      ]),
      password: new FormControl(''),
      gender: new FormControl(''),
      age: new FormControl(''),
    });
  }

  get email() {
    return this.form.get('email');
  }
  onSubmit() {
    console.log(this.form.value);
  }
}
