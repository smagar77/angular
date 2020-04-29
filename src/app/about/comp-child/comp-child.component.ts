import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-child',
  templateUrl: './comp-child.component.html',
  styleUrls: ['./comp-child.component.css']
})
export class CompChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  somename:string = 'H. Rackham'
  clickMe(){
    alert(this.somename)
  }

}
