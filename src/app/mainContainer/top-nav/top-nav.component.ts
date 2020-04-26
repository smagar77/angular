import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  access_token:string = '';
  login_status:boolean = false;
  login_url:string = "";
  logout_url:string = "";
  constructor() {}

  ngOnInit(): void {
    this.access_token = window.localStorage.getItem('access_token')
    if(this.access_token){
      this.login_status = true;
      this.login_url = "";
      this.logout_url = "/logout";
    } else{
      this.login_url = "/login";
      this.logout_url = "";
      this.login_status = false;
    }
  }
}
