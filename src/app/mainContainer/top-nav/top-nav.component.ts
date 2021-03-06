import { Component, OnInit } from '@angular/core';
import { CustomDirective } from '../../appDirectives/custom.directive'
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  access_token:string = '';
  constructor() {}

  //Main navigation array conditionally changed by login status
  main_nav = []
  username:string = ''
  userid:string = ''
  login_status:boolean=false
  ngOnInit(): void {
    this.access_token = window.localStorage.getItem('access_token')
    if(this.access_token){
      this.username = window.localStorage.getItem('username');
      this.userid = window.localStorage.getItem('userid');
      this.login_status = true
      this.main_nav = [{ label:'Home', url:'home'},
      { label:'Users', url:'users'},
      { label:'Matches', url:'matches'},
      { label:'About Us', url:'about' },
      { label:'Contact Us', url:'contact'},
      { label:'Log Out', url:'logout'}]
    } else{
      this.main_nav = [{ label:'About Us', url:'about' },
      {label:'Login', url:'login'}]
    }
  }
}
