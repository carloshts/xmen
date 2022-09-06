import { MatErrorModule } from './../../commons/mat-error/mat-error.module';
import { MaterialModule } from 'src/app/material/material.module';
import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes:Route[] = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'novo-usuario',
    component:NovoUsuarioComponent
  },
  {
    path:'editar-usuario/:id',
    component:NovoUsuarioComponent
  },
  {
    path:'perfil',
    component:PerfilComponent
  }
]
@NgModule({
  declarations: [
    LoginComponent,
    NovoUsuarioComponent,
    PerfilComponent
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
