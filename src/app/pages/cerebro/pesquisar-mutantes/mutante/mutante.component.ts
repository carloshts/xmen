import { XmenApiService } from './../../../../commons/services/xmenApi.service';
import { Component, OnInit, Input, SimpleChanges, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mutante',
  templateUrl: './mutante.component.html',
  styleUrls: ['./mutante.component.css']
})
export class MutanteComponent implements OnInit {

  constructor(
    private xmenApiService:XmenApiService,
    @Inject(MAT_DIALOG_DATA) public mutante:any
  ) { }
  @Input() nomeRecebido!:string;
  id:number = 3
  public nome:string = '';
  ngOnInit(): void {
    this.id = this.mutante?.id
    this.xmenApiService.getCharacterById(this.id)
    .subscribe(
      (response)=>{
        console.log(response)
        this.nome = response.name
      }
    )
  }
  ngOnChanges(changes:SimpleChanges){
    this.nome = this.nomeRecebido
  }

}
