import { XmenApiService } from './../../../commons/services/xmenApi.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pesquisar-mutantes',
  templateUrl: './pesquisar-mutantes.component.html',
  styleUrls: ['./pesquisar-mutantes.component.css']
})
export class PesquisarMutantesComponent implements OnInit {
  @ViewChild(MatSort) ordenador!:MatSort;
  public nome:FormControl = new FormControl('');
  public dataSource = new MatTableDataSource([])
  public collumnsXmen: string[] = ['name','alias','affiliation']

  constructor(
    private xmenApiService:XmenApiService
  ) { }

  ngOnInit(): void {
    this.dataSource.sort = this.ordenador;
  }
  pesquisarMutantes(){
    this.xmenApiService.getCharacters(this.nome.value)
    .subscribe(
      (response)=>{
        console.log(response)
        this.dataSource.data = response.results
      }
    )
  }
  ordernarDados(sortState: Sort) {
    if (sortState.direction) {
      console.log(`Sorted ${sortState.direction}`);
      if(sortState.direction=='asc')
        this.dataSource.data = this.dataSource.data.sort();
      else if(sortState.direction=='desc')
        this.dataSource.data = this.dataSource.data.reverse();
    } else {
      console.log('Sorting cleared');
    }
  }
}
