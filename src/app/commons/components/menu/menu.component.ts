import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xmen-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  public usuario!:any
  ngOnInit(): void {
    this.usuario = localStorage.getItem('usuario');
  }

}
