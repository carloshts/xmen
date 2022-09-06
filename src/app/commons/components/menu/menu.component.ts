import { UserModel } from './../../models/user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xmen-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private route:Router,
  ) { }
  public usuario:UserModel = {
    nome:'',
    senha:''
  }
  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario') as string);
  }
  logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login')
  }
}
