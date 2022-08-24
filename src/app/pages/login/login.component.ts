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
  public loginFormGroup:FormGroup = this.formBuilder.group(
    {
      nome: new FormControl({
        value: 'PROF X',
        disabled:false
      },[Validators.required]),
      senha:new FormControl('',[Validators.required,Validators.minLength(3)])
    });

  constructor(
    private formBuilder:FormBuilder,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  entrar(){
    console.log(this.loginFormGroup['controls']['senha'])
    //Validar os campos de login e seguir para Cerebro
    if(this.loginFormGroup.valid){
      console.log('Segue para Cerebro')
      this.router.navigateByUrl('/cerebro')
    }else{
      console.log('Campos invalidos')
      this.loginFormGroup.markAllAsTouched();
    }
  }

}
