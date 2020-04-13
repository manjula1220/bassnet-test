import { Component, OnInit } from '@angular/core';
import { ShareLinksService } from '../share-links.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  otherTheme:any;
  constructor(private _shareLinks: ShareLinksService) { }

 
  ngOnInit() {
    this._shareLinks.getTheme().subscribe(data => {
      this.otherTheme = data;
    })
  }

  sendLinks(){
    const dashboard = ['dashboard1', 'dashboard2', 'dashboard3'];
    this._shareLinks.sendLinks(dashboard);
  }




}
