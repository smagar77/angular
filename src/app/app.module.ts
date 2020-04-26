import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { MainContainerComponent } from './mainContainer/mainContainer';
import { TopNavComponent } from './mainContainer/top-nav/top-nav.component';
import { HeaderComponent } from './mainContainer/header/header.component';
import { Text01Component } from './mainContainer/text01/text01.component';
import { Text02Component } from './mainContainer/text02/text02.component';
import { SubscribeComponent } from './mainContainer/subscribe/subscribe.component';
import { FooterComponent } from './mainContainer/footer/footer.component';
import { CarouselComponent } from './mainContainer/carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MatchComponent } from './match/match.component';
import { MatchdetailsComponent } from './matchdetails/matchdetails.component';
import { WarningComponent } from './warning/warning.component';
import { HelperService } from './appServices/helper.service';
import { LogoutComponent } from './logout/logout.component';
import { UsersComponent } from './users/users.component';
const appRouts:Routes = [
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
  { path:'**', component:PagenotfoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    TopNavComponent,
    HeaderComponent,
    Text01Component,
    Text02Component,
    FooterComponent,
    SubscribeComponent,
    CarouselComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    PagenotfoundComponent,
    MatchComponent,
    MatchdetailsComponent,
    WarningComponent,
    LogoutComponent,
    UsersComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRouts),
    HttpClientModule
  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
