import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder
  ) { }
  public formCadastro!:FormGroup
  ngOnInit(): void {
    this.formCadastro = this.formBuilder.group({
      nome: new FormControl("",[Validators.required]),
      senha: new FormControl("",[Validators.required,Validators.minLength(3)])
    })
  }

}
