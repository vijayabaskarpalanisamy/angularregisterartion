import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;

@Injectable()
export class RegisterService {

  constructor( private http:Http) { }
  getDetails(){
    return this.http.get("http://localhost:8080/college")
        .map(res => res.json());
  }
   addmethod(details){
    return this.http.post("http://localhost:8080/college",details)
        .map(res => res.json());
  }
  getData(id){
    return this.http.get("http://localhost:8080/college/"+id)
        .map(res => res.json());
  }
  deletemethod(id){
    return this.http.delete("http://localhost:8080/college/"+id)
      
  }
  updatemethod (id, details){
    return this.http.put("http://localhost:8080/college/"+id,details)
        .map(res => res.json());
  }
}