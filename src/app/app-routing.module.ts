import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MatchComponent } from './match/match.component';
import { MatchdetailsComponent } from './matchdetails/matchdetails.component';
import { WarningComponent } from './warning/warning.component';
import { LogoutComponent } from './logout/logout.component';
import { UsersComponent } from './users/users.component';
import { MyComponent } from './mycomponent/mycomponent.component'
//routes defination
const routes:Routes = [
  { path:'', redirectTo:'login', pathMatch:'full' },
  { path:'home', component:HomeComponent },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'logout', component:LogoutComponent },
  { path:'users', component:UsersComponent},
  { path:'matches', children:[
    {path:'', component:MatchComponent},
    {path:'matchdetails', component:MatchdetailsComponent},
  ]},
  { path:'about', component:AboutComponent },
  { path:'contact', component:ContactComponent },
  { path:'warning', component:WarningComponent },
  { path:'mycomponent', component:MyComponent },
  { path:'**', component:PagenotfoundComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
