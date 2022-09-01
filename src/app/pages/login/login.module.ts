import { MatErrorModule } from './../../commons/mat-error/mat-error.module';
import { MaterialModule } from 'src/app/material/material.module';
import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

const routes:Route[] = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'novo-usuario',
    component:NovoUsuarioComponent
  }
]
@NgModule({
  declarations: [
    LoginComponent,
    NovoUsuarioComponent
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
