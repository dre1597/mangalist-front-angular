import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

type FormFields = {
  name: AbstractControl<string | null>;
  email: AbstractControl<string | null>;
  password: AbstractControl<string | null>;
  confirmPassword: AbstractControl<string | null>;
};

const MIN_LENGTH_NAME = 3;
const MAX_LENGTH_NAME = 50;
const MIN_LENGTH_EMAIL = 3;
const MAX_LENGTH_EMAIL = 50;
const MIN_LENGTH_PASSWORD = 6;
const MAX_LENGTH_PASSWORD = 50;

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  form: FormGroup<FormFields> = new FormGroup<FormFields>({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(MIN_LENGTH_NAME),
      Validators.maxLength(MAX_LENGTH_NAME),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(MIN_LENGTH_EMAIL),
      Validators.maxLength(MAX_LENGTH_EMAIL),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(MIN_LENGTH_PASSWORD),
      Validators.maxLength(MAX_LENGTH_PASSWORD),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(MIN_LENGTH_PASSWORD),
      Validators.maxLength(MAX_LENGTH_PASSWORD),
    ]),
  });

  get name(): AbstractControl<string | null> {
    return this.form.get('name') as AbstractControl;
  }

  get email(): AbstractControl<string | null> {
    return this.form.get('email') as AbstractControl;
  }

  get password(): AbstractControl<string | null> {
    return this.form.get('password') as AbstractControl;
  }

  get confirmPassword(): AbstractControl<string | null> {
    return this.form.get('confirmPassword') as AbstractControl;
  }

  ngOnInit(): void {
    this._addMatchValidator();
  }

  handleSubmit(): void {
    console.log(this.form?.value);
  }

  private _addMatchValidator(): void {
    this.form.addValidators(
      matchValidator(
        this.form.get('password') as FormControl,
        this.form.get('confirmPassword') as FormControl
      )
    );
  }
}

function matchValidator(
  control: AbstractControl,
  controlTwo: AbstractControl
): ValidatorFn {
  return () => {
    if (control.value !== controlTwo.value) {
      return { match_error: true };
    }
    return null;
  };
}
