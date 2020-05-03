import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    //check for login status
    var access_token = window.localStorage.getItem('access_token');
    if(access_token==null || access_token==''){
      this.router.navigate(['/login'])
    }
  }
  //ngSwitch case example for countrywise address
  country:string='india'
  display_countries:boolean=true

  //list of countries to use ng-container feature
  other_countries:any = [
    'UK',
    'Canada',
    'Belgium',
    'Singapore'
  ]
}
