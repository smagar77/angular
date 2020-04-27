import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userfilter'
})
export class UserfilterPipe implements PipeTransform {

  transform(value: any, searchTerm:any): any {
    return value.filter(function(search){
      return (
        search.username.search(searchTerm) >= 0 |
        search.first_name.search(searchTerm) >= 0 |
        search.last_name.search(searchTerm) >= 0 |
        search.email.search(searchTerm) >= 0
      )
    });
  }

}
