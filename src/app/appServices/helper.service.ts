import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private http:HttpClient) { }

  add_tag(tag, tags){
    tags.push({id:100, name:tag.value})
    return tags;
  }
  remove_tag(tag, tags){
    tags.splice(tag, 1);
    return tags;
  }

  get_datetime(){
    return new Date()
  }

  user_login(username, password):Observable<any>{
    var data:any = {
    'username':username,
    'password':password
    }
    var header = {'Content-Type':'application/json'}
    data = JSON.stringify(data)
    return this.http.post<any>('http://127.0.0.1:5000/login/', data, {'headers':header});
    //return this.http.get<any>('http://127.0.0.1:5000/users/');
  }

}
