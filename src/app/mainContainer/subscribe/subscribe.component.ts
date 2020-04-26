import {Component, OnInit} from '@angular/core'
@Component({
  selector    :'app-subscribe',
  templateUrl :'./subscribe.component.html',
  styleUrls   :['./subscribe.component.css']
})

export class SubscribeComponent implements OnInit{
  constructor(){}
  ngOnInit(): void{}
  subscribe_style:object = {
    'padding': '10px',
    'background':'#fff',
    'width': '100%',
    'margin':'15px auto'
  }
  message:string = ''
  onSubscribe(){
    this.message = "Thank you!"
  }

  input_text:string = ''
  onInputClick(event){
    this.input_text = event.target.value
  }

  comment_value:string = ''
  getComment(comment){
    this.comment_value = comment.value
  }

  email_address:string = 'Default Value'
  dropdown_class:object = {
    location:true
  }
  selected_location:string = ''
  getProperty(event){
    this.selected_location = event.target.value
  }
}
