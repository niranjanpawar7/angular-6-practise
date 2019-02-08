import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject("default message");
  currentMessage = this.messageSource.asObservable();

  constructor() { } 
   
  private subject = new BehaviorSubject<any>([]);

  sendDetails(UserName: any) {  
      this.subject.next({ UserName: UserName});
  }

  getDetails(): Observable<any> { 
      return this.subject.asObservable();
  }
}

 

