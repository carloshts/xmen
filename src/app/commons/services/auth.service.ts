import { UserService } from './user.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject!: BehaviorSubject<UserModel>;
  public userAuth!:Observable<UserModel>;
  constructor(private userService:UserService) {
    this.userSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('user') as string));
    this.userAuth = this.userSubject.asObservable();
   }
  public get userValue():UserModel{
    return this.userSubject.value
  }
  login(nome:string, senha:string):Promise<boolean>{

    return this.userService.getLogin(nome,senha)
    .toPromise()
    .then(
      (user:UserModel) => {

        if(user) {
          localStorage.setItem('user',JSON.stringify(user))
          this.userSubject.next(user)
          return true;
        }else return false;
      }
    )
    .catch(err=> {
      return false
    })
  }
  logout():void{
    localStorage.removeItem('user');
    this.userSubject.next({nome:'',senha:''});
  }
}
