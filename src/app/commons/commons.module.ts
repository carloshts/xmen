import { MaterialModule } from 'src/app/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MenuComponent
  ]
})
export class CommonsModule { }
