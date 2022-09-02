import { EpisodioComponent } from './episodio/episodio.component';
import { PageEvent } from '@angular/material/paginator';
import { XmenApiService } from './../../../commons/services/xmenApi.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Episode } from 'src/app/commons/models/episode';

@Component({
  selector: 'app-pesquisar-episodios',
  templateUrl: './pesquisar-episodios.component.html',
  styleUrls: ['./pesquisar-episodios.component.scss']
})
export class PesquisarEpisodiosComponent implements OnInit {

  constructor(
    private xmenApiService:XmenApiService,
    private dialog:MatDialog
  ) { }
  public dataSource:MatTableDataSource<any> = new MatTableDataSource();
  public colunas:string[] = ['id','title','number'];
  public episodio:FormControl = new FormControl();
  public total = 0;
  ngOnInit(): void {
    this.dataSource.data = [];
  }
  mudarPagina(pageEvent:PageEvent){
    this.pesquisarEpisodios(pageEvent.pageIndex+1)
  }
  pesquisarEpisodios(pagina?:number){
    if(!pagina) pagina = 1
    this.xmenApiService.getEpisodes(this.episodio.value,pagina)
    .subscribe(
      (response)=>{
        console.log(response)
        this.dataSource.data = response.results
        this.total = response.info.count
      }
    )
  }
  abrirEpisodio(episode:any){
    this.dialog.open(EpisodioComponent,{data:episode,height:'500px',width:'50%'})
  }
}
