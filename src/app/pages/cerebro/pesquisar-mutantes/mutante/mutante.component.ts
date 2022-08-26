import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mutante',
  templateUrl: './mutante.component.html',
  styleUrls: ['./mutante.component.css']
})
export class MutanteComponent implements OnInit {

  constructor() { }
  @Input() nomeRecebido!:string;
  public nome:string = '';
  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges){
    this.nome = this.nomeRecebido
  }

}
