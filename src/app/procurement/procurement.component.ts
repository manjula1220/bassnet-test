import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procurement',
  templateUrl: './procurement.component.html',
  styleUrls: ['./procurement.component.css']
})
export class ProcurementComponent implements OnInit {
  public isExpanded = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  togglePi(){
    this.isExpanded = !this.isExpanded;
  }

}
