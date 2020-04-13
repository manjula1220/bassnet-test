import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChildNavComponent } from './child-nav/child-nav.component';
import { DashboardFinalComponent } from './dashboard-final/dashboard-final.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectLevelsComponent } from './project-levels/project-levels.component';
import {NgDynamicBreadcrumbModule} from "ng-dynamic-breadcrumb";
import { ProcurementComponent } from './procurement/procurement.component';
import { IncidentComponent } from './incident/incident.component';
import { PiComponent } from './pi/pi.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    StatisticsComponent,
    DashboardComponent,
    ChildNavComponent,
    DashboardFinalComponent,
    ProjectsComponent,
    ProjectLevelsComponent,
    ProcurementComponent,
    IncidentComponent,
    PiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgDynamicBreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
