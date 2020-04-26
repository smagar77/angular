import { Component, OnInit } from '@angular/core';
import { HelperService } from '../appServices/helper.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private _helperservice:HelperService) { }

  ngOnInit(): void {
    if(window.localStorage.getItem('access_token')){
      this.router.navigate(['/home'])
    }
  }

  access_token:any = {}
  login(username, password):void{
    this._helperservice.user_login(username.value, password.value)
    .subscribe((access_token) => {
        if(access_token){
          //Add access token into local storage ang navigate to users
          window.localStorage.setItem('access_token', access_token.access_token)
          window.localStorage.setItem('username', username.value)
          window.localStorage.setItem('userid', access_token.userid)
          //this.router.navigate(['users'])
          window.location.href='/users'
        }
     })
  }

  navigate_register():void{
    this.router.navigate(['register'])
  }

}
