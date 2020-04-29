import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector:'[customStyles]'
})

export class CustomDirective{
  constructor(private element:ElementRef){
    element.nativeElement.style.fontStyle='italic'
  }
}
