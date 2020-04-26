import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text01',
  templateUrl: './text01.component.html',
  styleUrls: ['./text01.component.css']
})
export class Text01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  read_more_url:string = "#1"
}
