import { Component, OnInit } from '@angular/core'
import { HelperService } from '../appServices/helper.service'
import { Router } from '@angular/router'
@Component({
  selector:'app-mycomponent',
  templateUrl:'./mycomponent.component.html',
  styleUrls:["./mycomponent.component.css"]
})
export class MyComponent implements OnInit{
  constructor(private _myhelper:HelperService, private router:Router){

  }

  ngOnInit():void{}
  somvar='someval'
  count:boolean=true
  var1='something...'
  var2='somethingelse...'
  somefun(){
    this.router.navigate(['/home'])
  }
  some_location:string=''
  goto(goto_val){
    this.router.navigate(['/'+this.some_location])
  }
}
