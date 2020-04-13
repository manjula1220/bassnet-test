import { Component, OnInit } from '@angular/core';
import { ShareLinksService } from '../share-links.service';

@Component({
  selector: 'app-dashboard-final',
  templateUrl: './dashboard-final.component.html',
  styleUrls: ['./dashboard-final.component.css']
})
export class DashboardFinalComponent implements OnInit {

  otherTheme:any;
  constructor(private _shareLinks: ShareLinksService) { }

 
  ngOnInit() {
    this._shareLinks.getTheme().subscribe(data => {
      this.otherTheme = data;
    })
  }

}
