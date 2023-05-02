import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupPageComponent } from './signup-page.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
  declarations: [SignupPageComponent, SignupFormComponent],
  imports: [CommonModule, ReactiveFormsModule, SignupRoutingModule],
})
export class SignupModule {}
