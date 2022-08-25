import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisar-mutantes',
  templateUrl: './pesquisar-mutantes.component.html',
  styleUrls: ['./pesquisar-mutantes.component.css']
})
export class PesquisarMutantesComponent implements OnInit {

  constructor() { }
  public nome:FormControl = new FormControl('',[Validators.required]);
  ngOnInit(): void {
  }

}
