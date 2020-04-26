import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { HelperService } from '../../appServices/helper.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private _helperservice:HelperService) { }

  ngOnInit(): void {}
  header_title:string = 'The Visualization Layer'
  powered_by:string = 'Angular'
  subText(){
    return "Powered by "+this.powered_by
  }
  tags = [
    {id:1, name:'angular'},
    {id:2, name:'ux'},
    {id:3, name:'front_end'},
    {id:4, name:'google'},
    {id:5, name:'javacript'}
  ]

  //Add tags in header using ngFor
  //example of router.navigate()
  //example of injecting services
  add_tag(tag){
    this.tags = this._helperservice.add_tag(tag, this.tags)
//     if(this.tags.length > 7){
//       this.router.navigate(['warning'])
//     } else{
//       this.tags.push({id:100, name:tag.value})
//     }
  }
  remove_tag(tag){
    this.tags = this._helperservice.remove_tag(tag, this.tags)
//    this.tags.splice(tag, 1)
  }
  enter_tag:string = 'tag name'

  //Component communication
  @Input() input_bind:string="Input from child"
  output_bind:any = 'Output from child'
}
