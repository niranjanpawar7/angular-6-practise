import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { UserModel } from '../../model/UsersModel';

@Injectable({
  providedIn: 'root'
})

export class listingService {

  constructor(private http: HttpClient) { }

    getUserData() : Observable<UserModel[]>  { 
        return this.http.post<UserModel[]>('http://localhost:5000/users/getUserData', 'data'); 
    }
  
}
