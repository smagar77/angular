import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    //Remove access token on logout and navigate to login
    localStorage.removeItem('access_token')
    //this.router.navigate(['/login'])
    window.location.href='/login'
  }

}
