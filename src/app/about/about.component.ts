import {Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, Renderer2} from '@angular/core'
import { CompChildComponent } from './comp-child/comp-child.component'
@Component({
  selector    :'app-about',
  templateUrl :'about.component.html',
  styleUrls   : ['about.component.css']
})

export class AboutComponent implements OnInit{

  //ViewChild() demo01
  /*
    ViewChild() takes template reference variable
    and manipulate, within current component
  */
  dir_name:string = 'Tailor Fisherman';
  @ViewChild('box') box:ElementRef;
  constructor(private renderer:Renderer2){}
  ngOnInit():void{}
  ngAfterViewInit():void{
    //this.box.nativeElement.style.color='#056b93';
    this.renderer.setStyle(this.box.nativeElement, 'color', '#056b93' )

  }

  //ViewChild() demo02
  /*
    ViewChild() takes template reference variable
    and manipulate, within child of current component
  */
  @ViewChild(CompChildComponent) child:CompChildComponent;
  callChildMethod():void{
    this.child.clickMe()
  }
  changeChildProp():void{
    this.child.somename = 'Updatedname from parent'
  }

  //ng-content demo
  subject_address = 'Kaula Lumpur'
}
