import { Component, OnInit } from '@angular/core'
@Component({
  selector    :'app-carousel',
  templateUrl :'carousel.component.html',
})

export class CarouselComponent implements OnInit{
  constructor(){}
  ngOnInit():void{}
  myInterval = 1;
  is_slider:boolean = true
  toggle_slider(toggle){
    this.is_slider = toggle
  }
}
