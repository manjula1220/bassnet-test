import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareLinksService {

  private shareLinks = new Subject<any>();
  private _themeDark: Subject<boolean> = new Subject<boolean>();
  
  constructor() { }

  sendLinks(links) {
    this.shareLinks.next(links);
  }

  getLinks(): Observable<any> {
    return this.shareLinks.asObservable();
  }

  // isThemeDark = false; //this._themeDark.asObservable();
  sendTheme(val) {
    this._themeDark.next(val);
  }

  getTheme(): Observable<any> {
    return this._themeDark.asObservable();
  }

}
