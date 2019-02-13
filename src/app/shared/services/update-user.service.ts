import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  constructor(private http:HttpClient) { }

  updateUserData(data) : Observable<any>  {
    debugger
    return this.http.post('http://localhost:5000/users/updateUser', data);
  };
}
