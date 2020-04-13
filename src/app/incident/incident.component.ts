import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    
    
  let bar = new CanvasJS.Chart("barChart", {
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: "Basic Column Chart in Angular"
    },
    data: [{
      type: "column",
      dataPoints: [
        { y: 71, label: "Apple" },
        { y: 55, label: "Mango" },
        { y: 50, label: "Orange" },
        { y: 65, label: "Banana" },
        { y: 95, label: "Pineapple" },
        { y: 68, label: "Pears" },
        { y: 28, label: "Grapes" },
        { y: 34, label: "Lychee" },
        { y: 14, label: "Jackfruit" }
      ]
    }]
  });
    
  bar.render();

  }

}
