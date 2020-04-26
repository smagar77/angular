import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    var access_token = window.localStorage.getItem('access_token');
    if(access_token==null || access_token==''){
      this.router.navigate(['/login'])
    }
  }

}
