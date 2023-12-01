import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifService {

  notif$ : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  search$ : BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  setNotif(value : number) {
    console.log("notif :" ,value);
    this.notif$.next(value)
  }

  getNotif() {
    return this.notif$.asObservable();
  }

  setSearch(value: number) {
    this.search$.next(value);
  }

  getSearch() {
    return this.search$.asObservable();
  }
}
