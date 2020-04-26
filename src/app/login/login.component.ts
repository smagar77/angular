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

  ngOnInit(): void {}

  access_token:any = {}
  login(username, password):void{
    this._helperservice.user_login(username.value, password.value)
    .subscribe((access_token) => {
        if(access_token){
          window.localStorage.setItem('access_token', access_token.access_token)
          this.router.navigate([])
        }
     })
  }

}
