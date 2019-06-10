import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logged: boolean = sessionStorage.getItem('resgitred') ? Boolean(sessionStorage.getItem('resgitred')) : false;
  private authorize = new Subject<Boolean>();

  constructor() { this.authorize.next(false) }

  callNextState = (status: boolean) => {
    this.logged = status;
    this.authorize.next(this.logged);
  }

  public getAuth = (): Observable<any> => {
    return this.authorize.asObservable();
  }
}
