import { MatErrorModule } from './../../commons/mat-error/mat-error.module';
import { MaterialModule } from 'src/app/material/material.module';
import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

const routes:Route[] = [
  {
    path:'',
    component:LoginComponent
  }
]
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatErrorModule
  ]
})
export class LoginModule { }
