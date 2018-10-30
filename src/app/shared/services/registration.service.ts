import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

  constructor(private http: HttpClient) { }

    saveUserData(data) : Observable<any>  {
        return this.http.post('http://localhost:5000/users/savedata', data);
    };
}
