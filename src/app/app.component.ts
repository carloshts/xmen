import { UserModel } from './commons/models/user';
import { AuthService } from './commons/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xmen';
  userAuth!:UserModel
  constructor(
    public authService:AuthService
  ){
    this.authService.userAuth.subscribe(
      (userAuth:UserModel)=>{
        console.log(userAuth)
        if(userAuth)this.userAuth = userAuth
      }
    )
  }

}
