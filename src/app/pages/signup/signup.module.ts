import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupPageComponent } from './signup-page.component';
import { MaterialModule } from '../../material.module';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
  declarations: [SignupPageComponent, SignupFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SignupRoutingModule,
  ],
})
export class SignupModule {}
