import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logged = false;
  private authorize = new Subject<Boolean>();

  constructor() { this.authorize.next(false) }

  callNextState = (status: boolean) => {
    this.logged = status
    console.log(this.logged)
    this.authorize.next(this.logged)
  }

  public getAuth(): Observable<any> {
    return this.authorize.asObservable();
  }
}
