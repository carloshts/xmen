import { AbstractControl } from '@angular/forms';
import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mat-error',
  templateUrl: './mat-error.component.html',
  styleUrls: ['./mat-error.component.css']
})
export class MatErrorComponent implements OnInit {
  public erro:string = '';
  @Input() control!:AbstractControl;
  @Input() legendas:any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges){
    this.erro = this.validarControl();
  }
  validarControl():string{
    let legendaModificada:string = '';
    if(this.control?.errors){
      let errors = this.control.errors
      if(errors?.required) {
        this.legendas.forEach(
          (legenda)=>{
            if(legenda.error=='required') legendaModificada = legenda.legendaErro;
          });
        if(legendaModificada=='')  return 'Campo obrigatório';
        else return legendaModificada;

      }
      if(errors?.minlength) return 'Digite no mínimo '+errors.minlength.requiredLength+'. '+errors.minlength.actualLength+'/'+errors.minlength.requiredLength;
      if(errors?.maxlength) return 'Digite no maximo '+errors.maxlength.requiredLength+'. '+errors.maxlength.actualLength+'/'+errors.maxlength.requiredLength;
      return '';
    } else {
      return '';
    }
  }
}
export interface legendaErro{
  erro:string;
  legenda:string;
}
