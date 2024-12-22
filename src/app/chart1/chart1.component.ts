import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component {
  lineChart=new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Patients'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Diabetic Patients admitted',
        data: [10, 2, 3,6,9,17,20,10,5,2,16]
      } as any,
      {
        name: 'Fever Patients admitted',
        data: [1, 2, 3,5,6,7,8,9,10,11,12]
      } as any,
      {
        name: 'Anemic Patients admitted',
        data: [12, 11, 10,9,8,7,6,5,4,3,2]
      } as any
    ]

  })

  pieChart=new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },
  
    credits: {
      enabled: false,
    },
  
    plotOptions: {
      pie: {
        innerSize: '50%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
  
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Diseases',
    },
  
    legend: {
      enabled: false,
    },
  
    series: [
      {
        type: 'pie',
        data: [
          { name: 'COVID 19', y: 1, color: '#eeeeee' },
  
          { name: 'HIV/AIDS', y: 2, color: '#393e46' },
  
          { name: 'EBOLA', y: 3, color: '#00adb5' },
          { name: 'DISPORA', y: 4, color: '#eeeeee' },
          { name: 'DIABETES', y: 5, color: '#506ef9' },
        ],
      },
    ],
  })

  lineChartwithXaxis=new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Patients'
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
}