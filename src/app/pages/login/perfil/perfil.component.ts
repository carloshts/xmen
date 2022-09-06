import { UserModel } from './../../../commons/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }
  public user:UserModel = {
    nome:'',
    senha:''
  };
  ngOnInit(): void {
    const user:any = localStorage.getItem('usuario')
    this.user = JSON.parse(user);
  }

}
