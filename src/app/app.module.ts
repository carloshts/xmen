import { MenuComponent } from './commons/components/menu/menu.component';
import { CommonsModule } from './commons/commons.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { LoginModule } from './pages/login/login.module';
import { CerebroModule } from './pages/cerebro/cerebro.module';
import { MaterialModule } from './material/material.module';
import { MatErrorModule } from './commons/mat-error/mat-error.module';


const routes: Route[]=[
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    loadChildren: ()=> import('./pages/login/login.module').then(m=>m.LoginModule),
  },
  {
    path:'cerebro',
    loadChildren:()=>import('./pages/cerebro/cerebro.module').then(m=>m.CerebroModule)
  }
]
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    LoginModule,
    CerebroModule,
    MaterialModule,
    MatErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
