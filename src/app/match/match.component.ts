import { Component, OnInit } from '@angular/core';
import { HelperService } from '../appServices/helper.service';
@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  constructor(private _helperservice:HelperService) { }
  matches=[];
  dataLoading:boolean=true
  ngOnInit(): void {
    this._helperservice.get_matches()
    .subscribe(matches_data => { this.matches=matches_data.matches;this.dataLoading=false})
  }
}
