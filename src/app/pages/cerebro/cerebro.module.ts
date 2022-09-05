import { CommonsModule } from './../../commons/commons.module';
import { MatErrorModule } from './../../commons/mat-error/mat-error.module';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisarMutantesComponent } from './pesquisar-mutantes/pesquisar-mutantes.component';
import { MaterialModule } from 'src/app/material/material.module';
import { InimigosComponent } from './inimigos/inimigos.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MutanteComponent } from './pesquisar-mutantes/mutante/mutante.component';
import { PesquisarEpisodiosComponent } from './pesquisar-episodios/pesquisar-episodios.component';
import { EpisodioComponent } from './pesquisar-episodios/episodio/episodio.component';
const routes:Route[] = [
  {
    path:'',
    component:PesquisarMutantesComponent
  },{
    path:'inimigos',
    component:InimigosComponent
  },
  {
    path:'episodios',
    component:PesquisarEpisodiosComponent
  }

]
@NgModule({
  declarations: [
    PesquisarMutantesComponent,
    InimigosComponent,
    MutanteComponent,
    PesquisarEpisodiosComponent,
    EpisodioComponent
  ],
  imports: [
    CommonsModule,
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatErrorModule,
    HttpClientModule
  ]
})
export class CerebroModule { }
