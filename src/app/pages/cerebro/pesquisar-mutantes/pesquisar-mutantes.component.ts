import { MutanteComponent } from './mutante/mutante.component';
import { XmenApiService } from './../../../commons/services/xmenApi.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pesquisar-mutantes',
  templateUrl: './pesquisar-mutantes.component.html',
  styleUrls: ['./pesquisar-mutantes.component.scss']
})
export class PesquisarMutantesComponent implements OnInit {
  @ViewChild(MatSort) ordenador!:MatSort;
  @ViewChild(MatPaginator) paginador!:MatPaginator;
  public nome:FormControl = new FormControl('');
  public dataSource = new MatTableDataSource([])
  public collumnsXmen: string[] = ['name','alias','affiliation']
  public total = 0;
  constructor(
    private xmenApiService:XmenApiService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(){
    this.dataSource.sort = this.ordenador;
    //this.dataSource.paginator = this.paginador;
  }
  mudarPagina(pageEvent:PageEvent){
    this.pesquisarMutantes(pageEvent.pageIndex)
  }
  pesquisarMutantes(pageIndex?:number){
    console.log('pagina',pageIndex)
    let pagina:number = 1
    if(pageIndex) pagina = pageIndex+1;
    this.xmenApiService.getCharacters(this.nome.value,pagina)
    .subscribe(
      (response)=>{
        console.log(response)
        this.dataSource.data = response.results
        this.total = response.info.count
        console.log(this.total)
      }
    )
  }
  mostrarMutante(mutante:any){
    this.dialog.open(MutanteComponent,{height:'50%',width:'50%',data:mutante})
  }
}
