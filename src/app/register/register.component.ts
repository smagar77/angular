import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HelperService } from '../appServices/helper.service'

@Component({
  selector:'app-register',
  templateUrl:'./register.component.html',
  styleUrls:['./register.component.css']
})

export class RegisterComponent implements OnInit{
  constructor(private router:Router, private _helperservice:HelperService){}
  ngOnInit():void{}
  navigate_login():void{
    this.router.navigate(['/login'])
  }

  registration_status:string=''
  register(data){
    this._helperservice.register(data)
    .subscribe((registration) => {
        console.log(registration)
        if(registration.status=='success'){
          this.registration_status = registration.message
          this.router.navigate(['/login'])
        } else {
          this.registration_status = registration.message
        }
     })
  }
}
