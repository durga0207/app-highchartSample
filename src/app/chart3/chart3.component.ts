import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.css']
})
export class Chart3Component {
  areasplineChartwithXaxis=new Chart({
    chart: {
      type: 'areaspline',
      zooming:{
        type:'x'
      }
    },
    title: {
      text: 'AREA SPLINE'
    },
    credits: {
      // enabled: false, // disable another link
      text:'Atominos',
      href:'https://google.com',
      position:{
        align:'right',
        x:2
      },
      style:{
        fontSize:'15px',
        color:'Blue'
      }
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
    tooltip:{
      animation:false,
      backgroundColor:'#e6a45e',
      borderColor:'orange',
      borderWidth:2,
      borderRadius:2,
      followPointer:true,
      // followTouchMove:true,
      style:{
        color:'#ffffff'
      }
    }

  })

  chart2=new Chart({
    chart: {
      type: 'areaspline',
      zooming:{
        type:'x'
      }
    },
    title: {
      text: 'AREA SPLINE2'
    },
    colors:['#de6137', '#de6137', '#6cde37', '#37dedb', '#3737de', '#ca37de'],
    credits: {
      // enabled: false, // disable another link
      text:'Atominos',
      href:'https://google.com',
      position:{
        align:'right',
        x:2
      },
      style:{
        fontSize:'15px',
        color:'Blue'
      }
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
    // tooltip:{
    //   animation:false,
    //   backgroundColor:'#e6a45e',
    //   borderColor:'orange',
    //   borderWidth:2,
    //   borderRadius:2,
    //   followPointer:true,
    //   // followTouchMove:true,
    //   style:{
    //     color:'#ffffff'
    //   }
    // }
    tooltip:{
      formatter() {
        return`X-axis: ${this.x}. Y-axis: ${this.y}`
      }
    }

  })
}
