import { Mensagem } from './../../../commons/interfaces/mensagem';
import { Router } from '@angular/router';
import { UserService } from './../../../commons/services/user.service';
import { UserModel } from './../../../commons/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    private userService:UserService,
    private router:Router,
  ) { }
  public user:UserModel = {
    nome:'',
    senha:''
  };
  ngOnInit(): void {

    const userAuth:UserModel =  JSON.parse(localStorage.getItem('usuario') as string)
    if(userAuth._id){
      this.userService.getUser(userAuth._id)
      .subscribe((user:UserModel)=>{
        this.user = user
      })
    }

  }
  deletarUsuario(){
    const userAuth:UserModel =  JSON.parse(localStorage.getItem('usuario') as string)
    if(userAuth._id){
      this.userService.deleteUser(userAuth._id)
      .subscribe(
        (mensagem:Mensagem)=>{
          console.log(mensagem.mensagem)
          localStorage.clear()
          this.router.navigateByUrl('login')

        },
        (error:Mensagem)=>{
          console.log(error)
          alert('Erro na requisição')
        }
      )
    }

  }
}
