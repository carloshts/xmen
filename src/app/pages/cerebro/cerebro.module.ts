import { MatCardModule } from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list'
import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisarMutantesComponent } from './pesquisar-mutantes/pesquisar-mutantes.component';
import { MaterialModule } from 'src/app/material/material.module';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { InimigosComponent } from './inimigos/inimigos.component'
const routes:Route[] = [
  {
    path:'',
    component:PesquisarMutantesComponent
  },{
    path:'inimigos',
    component:InimigosComponent
  }

]
@NgModule({
  declarations: [
    PesquisarMutantesComponent,
    InimigosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class CerebroModule { }
