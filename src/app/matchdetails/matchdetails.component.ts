import { Component, OnInit } from '@angular/core';
import { HelperService } from '../appServices/helper.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-matchdetails',
  templateUrl: './matchdetails.component.html',
  styleUrls: ['./matchdetails.component.css']
})
export class MatchdetailsComponent implements OnInit {

  constructor(private _helperservice:HelperService, private route:ActivatedRoute) { }

  deliveries_data=[];
  dataLoading:boolean = true
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this._helperservice.get_deliveries(params['id']).subscribe( deliveries_data=>{this.deliveries_data=deliveries_data;this.dataLoading=false} )
    })
  }

}
