import { XmenApiService } from './../../../commons/services/xmenapi.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisar-mutantes',
  templateUrl: './pesquisar-mutantes.component.html',
  styleUrls: ['./pesquisar-mutantes.component.css']
})
export class PesquisarMutantesComponent implements OnInit {

  constructor(
    private xmenApiService:XmenApiService
  ) { }

  public nome:FormControl = new FormControl('',[Validators.required]);
  public dataSource = [
    {nome:'PROF X',poder:'Telepatia'},
    {nome:'Logan',poder:'Fator de cura'}
  ]

  ngOnInit(): void {
  }
  pesquisarMutantes(){
    this.xmenApiService.getCharacters()
    .subscribe(
      (response)=>{
        console.log(response)
      }
    )
  }
}
