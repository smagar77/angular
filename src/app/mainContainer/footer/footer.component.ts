import { Component, OnInit } from '@angular/core'
import { HelperService } from '../../appServices/helper.service'
@Component({
  selector    :"app-footer",
  templateUrl :"./footer.component.html",
  styleUrls   :["./footer.component.css"]
})

export class FooterComponent implements OnInit{
  constructor(private _helperservice:HelperService){}
  ngOnInit(): void {}
  runtime_classes = {
    'footer-text':true
  }
  runtime_style = {
    'background':'#888',
  }

  //get current datetime using dependency injection
  current_datetime:any = this._helperservice.get_datetime()
}
