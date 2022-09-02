import { UserModel } from './../../commons/models/user';
import { UserService } from './../../commons/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public nome:FormControl = new FormControl({
    value: 'PROF X',
    disabled:false
  },[Validators.required]);
  public loginFormGroup!: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private userService:UserService
    ) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group(
      {
        nome: new FormControl({
          value: '',
          disabled:false
        },[Validators.required]),
        senhas:new FormControl('',[Validators.required,Validators.minLength(3)]),
        senha: new FormControl('')
      });

  }
  entrar(){
    console.log(this.loginFormGroup['controls']['senha'])
    //Validar os campos de login e seguir para Cerebro
    if(this.loginFormGroup.valid){
      console.log('Segue para Cerebro')
      this.userService.getUsers()
      .subscribe(
        (usuarios:UserModel[])=>{
          console.log(usuarios)
          let permitir:boolean = usuarios.some((usuario:UserModel)=>usuario.nome == this.loginFormGroup.get('nome')?.value)
          if(permitir){
            let usuarioRecuperado:UserModel[] = usuarios.filter((usuario:UserModel)=>usuario.nome == this.loginFormGroup.get('nome')?.value)

            this.loginFormGroup.patchValue(usuarioRecuperado[0])
            this.loginFormGroup.get('senhas')?.setValue(usuarioRecuperado[0].senha)
            this.router.navigateByUrl('/cerebro')
          } else {
            alert('Usuário não encontrado!')
          }
        }
      )
      //
    }else{
      console.log('Campos invalidos')
      this.loginFormGroup.markAllAsTouched();
    }
  }

}
