import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SignupPageComponent } from './signup-page.component';

const routes = [
  {
    path: '',
    component: SignupPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupRoutingModule {}
