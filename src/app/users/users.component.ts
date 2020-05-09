import { Component, OnInit } from '@angular/core'
import { HelperService } from '../appServices/helper.service'
@Component({
  selector:'app-users',
  templateUrl:'./users.component.html',
  styleUrls:['./users.component.css']
})

export class UsersComponent implements OnInit{
  constructor(private _helperservice:HelperService){}
  users=[]
  userSearch:string = ''
  ngOnInit():void{
    this._helperservice.get_users()
    .subscribe(users => this.users=users)
  }
  delete_user(user_id){

  }

}
