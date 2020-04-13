import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public routes = [
    {
      "main":"home",
      "sideNavs" : [
        {
          "name" : "Dashboard",
          "iconName" : "dashboard",
          "type" : "mat-icon",
          "childrens" : [
            {
              "name" : "Dashboard 1",
              "link" : "statistics"
            },
            {
              "name" : "Dashboard 2",
              "link" : "home"
            },
            {
              "name" : "Dashboard 3",
              "link" : "statistics"
            }
          ]
        },
        {
          "name" : "Dashboard",
          "iconName" : "date_range",
          "type" : "mat-icon",
          "childrens" : [
            {
              "name" : "date_range Dashboard 1",
              "link" : "statistics"
            },
            {
              "name" : "date_range Dashboard 2",
              "link" : "home"
            },
            {
              "name" : "date_range Dashboard 3",
              "link" : "statistics"
            }
          ]
        }
      ]
    },
    {
      "main":"Fleet",
      "sideNavs" : [
        {
          "name" : "Dashboard",
          "iconName" : "dashboard",
          "type" : "mat-icon",
          "childrens" : [
            {
              "name" : "Fleet Dashboard 1",
              "link" : "home"
            },
            {
              "name" : "Fleet Dashboard 2",
              "link" : "statistics"
            },
            {
              "name" : "Fleet Dashboard 3",
              "link" : "home"
            }
          ]
        }
      ]
    }
  ]
  public sideNavs:any;
  public sidenavChilds:any;
  
  constructor(private _router: Router) { }

  ngOnInit(): void {
    // this.loadsideNav('home');
  }

  loadsideNav(linkname){
    const sideNavObj = this.routes.find(route => route.main === linkname);
    this.sideNavs= sideNavObj.sideNavs;
    this.sidenavChilds = this.sideNavs[0].childrens;
    this._router.navigate([this.sidenavChilds[0].link]);
  }

  loadChildrens(parent){
    console.log(parent);
    this.sidenavChilds = parent.childrens;
  }

}
