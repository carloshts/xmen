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
        senha: new FormControl('',[Validators.required,Validators.minLength(3)])
      });

  }
  entrar(){
    //Validar os campos de login e seguir para Cerebro
    if(this.loginFormGroup.valid){
      console.log('Segue para Cerebro')
      const user:UserModel = this.loginFormGroup.getRawValue();
      this.userService.getLogin(user.nome, user.senha)
      .subscribe(
        (usuario:UserModel)=>{
          console.log(usuario)
          if(usuario){
            localStorage.setItem('usuario',JSON.stringify(usuario))
            this.router.navigateByUrl('/cerebro')
          } else {
            alert('Usuário não encontrado!')
            localStorage.clear();
          }
        }
      )
    }else{
      console.log('Campos invalidos')
      this.loginFormGroup.markAllAsTouched();
    }
  }

}
