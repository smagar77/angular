import { Component, OnInit, Input } from '@angular/core';
import { HelperService } from '../../appServices/helper.service'

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor(private _helperservice:HelperService){
    this._helperservice.subject_name.subscribe(name_ => {
      this.subject_name = name_
    })
  }

  ngOnInit(): void {
  }

  @Input() subject_address:string;
  subject_name:string;
  updateOnClick(update_name){
    this._helperservice.subject_name.next(update_name.value)
  }

}
