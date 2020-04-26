import { Component, OnInit, Output } from '@angular/core'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs/operators';

@Component({
  selector    : 'app-mainContainer',
  templateUrl : './mainContainer.component.html',
  styleUrls   : ['./mainContainer.component.css']
})

export class MainContainerComponent implements OnInit{
  constructor(private router:Router, private route:ActivatedRoute){}
  ngOnInit():void{}

  //parent-child property binding
  input_bind_:any = 'Input from parent';
  @Output() output_bind:any = 'Output from parent'
}
