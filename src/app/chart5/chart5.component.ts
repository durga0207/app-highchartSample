// import { Component, OnInit } from '@angular/core';
// import * as Highcharts from 'highcharts';
// import HighchartsMap from 'highcharts/modules/map';
// import worldMap from '@highcharts/map-collection/custom/world.geo.json'; // Example world map

// // Initialize the map module
// HighchartsMap(Highcharts);

// @Component({
//   selector: 'app-chart5',
//   templateUrl: './chart5.component.html',
//   styleUrls: ['./chart5.component.css']
// })
// export class Chart5Component implements OnInit {
//   Highcharts: typeof Highcharts = Highcharts;
//   chartOptions: Highcharts.Options = {};

//   constructor() {}

//   ngOnInit(): void {
//     // Set up the chart options
//     this.chartOptions = {
//       chart: {
//         map: worldMap, // World map GeoJSON data
//       },
//       title: {
//         text: 'World Map'
//       },
//       mapNavigation: {
//         enabled: true,
//         buttonOptions: {
//           verticalAlign: 'bottom'
//         }
//       },
//       colorAxis: {
//         min: 0,
//         stops: [
//           [0, '#EFEFFF'],
//           [0.67, '#4444FF'],
//           [1, '#000022']
//         ]
//       },
//       series: [{
//         data: [
//           { 'hc-key': 'US', value: 10 },
//           { 'hc-key': 'DE', value: 15 },
//           { 'hc-key': 'IN', value: 20 }
//         ],
//         name: 'Random Data'
//       }as any]
//     };
//   }
// }
