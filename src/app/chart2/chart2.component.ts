import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component {
  lineChartwithXaxis=new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'LINE'
    },
    credits: {
      enabled: false
    },
    xAxis:{
      categories:['tab1', 'tab2', 'tab3', 'tab4', 'tab1', 'tab2', 'tab3', 'tab4', 'tab1', 'tab2','tab3']
    },
    series: [
      {
        name: 'Diabetic Patients admitted',
        data: [10, 2, 3,6,9,17,20,10,5,2]
      } as any,
      {
        name: 'Fever Patients admitted',
        data: [1, 2, 3,5,6,7,8,9,10,11,12]
      } as any,
      {
        name: 'Anemic Patients admitted',
        data: [12, 11, 10,9,8,7,6,5,4,3,]
      } as any
    ]

  })

  barChartwithXaxis=new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'BAR'
    },
    credits: {
      enabled: false
    },
    xAxis:{
      categories:['tab1', 'tab2', 'tab3', 'tab4', 'tab1', 'tab2', 'tab3', 'tab4', 'tab1', 'tab2','tab3']
    },
    series: [
      {
        name: 'Diabetic Patients admitted',
        data: [10, 2, 3,6,9,17,20,10,5,2]
      } as any,
      {
        name: 'Fever Patients admitted',
        data: [1, 2, 3,5,6,7,8,9,10,11,12]
      } as any,
      {
        name: 'Anemic Patients admitted',
        data: [12, 11, 10,9,8,7,6,5,4,3,]
      } as any
    ]

  })

  pieChartwithXaxis=new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'PIE'
    },
    credits: {
      enabled: false
    },
    xAxis:{
      categories:['tab1', 'tab2', 'tab3', 'tab4', 'tab1', 'tab2', 'tab3', 'tab4', 'tab1', 'tab2','tab3']
    },
    series: [
      {
        name: 'Diabetic Patients admitted',
        data: [10, 2, 3,6,9,17,20,10,5,2]
      } as any,
      {
        name: 'Fever Patients admitted',
        data: [1, 2, 3,5,6,7,8,9,10,11,12]
      } as any,
      {
        name: 'Anemic Patients admitted',
        data: [12, 11, 10,9,8,7,6,5,4,3,]
      } as any
    ]

  })
  columnChartwithXaxis=new Chart({
    chart: {
      type: 'column'
    },
    title: {
      text: 'COLUMN'
    },
    credits: {
      enabled: false
    },
    xAxis:{
      categories:['tab1', 'tab2', 'tab3', 'tab4', 'tab1', 'tab2', 'tab3', 'tab4', 'tab1', 'tab2','tab3']
    },
    series: [
      {
        name: 'Diabetic Patients admitted',
        data: [10, 2, 3,6,9,17,20,10,5,2]
      } as any,
      {
        name: 'Fever Patients admitted',
        data: [1, 2, 3,5,6,7,8,9,10,11,12]
      } as any,
      {
        name: 'Anemic Patients admitted',
        data: [12, 11, 10,9,8,7,6,5,4,3,]
      } as any
    ]

  })
  scatChartwithXaxis=new Chart({
    chart: {
      type: 'scatter'
    },
    title: {
      text: 'SCATTER'
    },
    credits: {
      enabled: false
    },
    xAxis:{
      categories:['tab1', 'tab2', 'tab3', 'tab4', 'tab1', 'tab2', 'tab3', 'tab4', 'tab1', 'tab2','tab3']
    },
    series: [
      {
        name: 'Diabetic Patients admitted',
        data: [10, 2, 3,6,9,17,20,10,5,2]
      } as any,
      {
        name: 'Fever Patients admitted',
        data: [1, 2, 3,5,6,7,8,9,10,11,12]
      } as any,
      {
        name: 'Anemic Patients admitted',
        data: [12, 11, 10,9,8,7,6,5,4,3,]
      } as any
    ]

  })
  areaChartwithXaxis=new Chart({
    chart: {
      type: 'area'
    },
    title: {
      text: 'AREA'
    },
    credits: {
      enabled: false
    },
    xAxis:{
      categories:['tab1', 'tab2', 'tab3', 'tab4', 'tab1', 'tab2', 'tab3', 'tab4', 'tab1', 'tab2','tab3']
    },
    series: [
      {
        name: 'Diabetic Patients admitted',
        data: [10, 2, 3,6,9,17,20,10,5,2]
      } as any,
      {
        name: 'Fever Patients admitted',
        data: [1, 2, 3,5,6,7,8,9,10,11,12]
      } as any,
      {
        name: 'Anemic Patients admitted',
        data: [12, 11, 10,9,8,7,6,5,4,3,]
      } as any
    ]

  })
  areasplineChartwithXaxis=new Chart({
    chart: {
      type: 'areaspline'
    },
    title: {
      text: 'AREA SPLINE'
    },
    credits: {
      enabled: false // disable another link
    },
    xAxis:{
      categories:['tab1', 'tab2', 'tab3', 'tab4', 'tab1', 'tab2', 'tab3', 'tab4', 'tab1', 'tab2','tab3']
    },
    series: [
      {
        name: 'Diabetic Patients admitted',
        data: [10, 2, 3,6,9,17,20,10,5,2]
      } as any,
      {
        name: 'Fever Patients admitted',
        data: [1, 2, 3,5,6,7,8,9,10,11,12]
      } as any,
      {
        name: 'Anemic Patients admitted',
        data: [12, 11, 10,9,8,7,6,5,4,3,]
      } as any
    ],
    yAxis:{
      title:{
        text:'Tablets count' //y axis title
      }
    },

  })

}
