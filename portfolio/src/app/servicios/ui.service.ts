import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddLogro: boolean = false;
  private subject = new Subject<any>();
  constructor() { }

  toggleAddLogro() {
    this.showAddLogro = !this.showAddLogro;
    this.subject.next(this.showAddLogro);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
