import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareLinksService } from '../share-links.service';
// import { link } from 'fs';

@Component({
  selector: 'app-child-nav',
  templateUrl: './child-nav.component.html',
  styleUrls: ['./child-nav.component.css']
})
export class ChildNavComponent implements OnInit {

  subscription: Subscription;
  links: any;

  constructor(private _shareLinks: ShareLinksService) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.subscription = this._shareLinks.getLinks().subscribe(data => {
      this.links = data;
    })
  }

}
