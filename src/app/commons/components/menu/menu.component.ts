import { AuthService } from 'src/app/commons/services/auth.service';
import { UserModel } from './../../models/user';
import { Router } from '@angular/router';
import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'xmen-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private route:Router,
    private authService:AuthService
  ) {

   }
  @Input() public userAuth!:UserModel;

  ngOnInit(): void {
  }

  ngOnChange(change:SimpleChange){
  }

  logout(){
    this.authService.logout();
    this.route.navigateByUrl('/login')
  }
}
