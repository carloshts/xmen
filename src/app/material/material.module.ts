import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatTable, MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
  ]
})
export class MaterialModule { }
