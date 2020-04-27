import { PipeTransform, Pipe } from '@angular/core'

@Pipe({
  name:'custompipe'
})
export class CustomPipe implements PipeTransform{
  transform(value:any){
    return new Date()
  }
}
