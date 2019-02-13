import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})

export class listingService {

  constructor(private http: HttpClient) { }

    getUserData() : Observable<any>  { 
        return this.http.post('http://localhost:5000/users/getUserData', 'data');
    };
}
