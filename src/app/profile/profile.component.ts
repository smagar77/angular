import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '../appServices/helper.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router:Router, private _helperservice:HelperService, private aroute:ActivatedRoute) { }

  user_profile:any={
    id:null,
    username:null,
    password:null,
    first_name:null,
    last_name:null,
    email:null,
  };
  ngOnInit(): void {
    var access_token = window.localStorage.getItem('access_token');
    if(access_token==null || access_token==''){
      this.router.navigate(['/login'])
    }

    this.aroute.params.subscribe(params=>{
      this._helperservice.get_users(params['id'])
      .subscribe(user_profile=>{this.user_profile=user_profile[0]; console.log(this.user_profile)})
    })
  }

  update_profile_response;
  update_profile(profile){
    this._helperservice.update_profile(profile)
    .subscribe(response=>{

      this.update_profile_response = response
      
    })
  }

}
