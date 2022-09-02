import { UserService } from './../../../commons/services/user.service';
import { UserModel } from './../../../commons/models/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService
  ) { }
  public formCadastro!:FormGroup
  ngOnInit(): void {
    this.formCadastro = this.formBuilder.group({
      nome: new FormControl("",[Validators.required]),
      senha: new FormControl("",[Validators.required,Validators.minLength(3)])
    })
  }
  cadastrar(){
    this.formCadastro.updateValueAndValidity();
    if(this.formCadastro.valid){
      const user:UserModel = {
        nome:this.formCadastro.get('nome')?.value,
        senha:this.formCadastro.get('senha')?.value
      }
      this.userService.createUser(user)
      .subscribe(
        (usuarioCriado:UserModel)=>{
          alert(usuarioCriado._id)
        }
      )
    }else{
      this.formCadastro.markAllAsTouched();
    }
  }

}
