import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart4',
  templateUrl: './chart4.component.html',
  styleUrls: ['./chart4.component.css']
})
export class Chart4Component {
  Highcharts: typeof Highcharts = Highcharts;
  data:Highcharts.Options = {
    chart: {
        zooming: {
            type: 'xy'
        }
    },
    title: {
        text: 'COMBINED CHART',
        align: 'left'
    },
    // credits: {
    //     text: 'Source: ' +
    //         '<a href="https://www.yr.no/nb/historikk/graf/5-97251/Norge/Finnmark/Karasjok/Karasjok?q=2023"' +
    //         'target="_blank">YR</a>'
    // },
    xAxis: [{
        categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
                color: 'pink'
            }
        },
        title: {
            text: 'Temperature',
            style: {
                color: 'red'
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Precipitation',
            style: {
                color: 'white'
            }
        },
        labels: {
            format: '{value} mm',
            style: {
                color: 'green'
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    // legend: {
    //     align: 'left',
    //     verticalAlign: 'top',
    //     backgroundColor:
    //         Highcharts.defaultOptions.legend?.backgroundColor || // theme
    //         'rgba(255,255,255,0.25)'
    // },
    series: [{
        name: 'Precipitation',
        type: 'column',
        yAxis: 1,
        data: [
            45.7, 37.0, 28.9, 17.1, 39.2, 18.9, 90.2, 78.5, 74.6,
            18.7, 17.1, 16.0
        ],
        tooltip: {
            valueSuffix: ' mm'
        }

    }, {
        name: 'Temperature1',
        type: 'spline',
        data: [
            -11.4, -9.5, -14.2, 0.2, 7.0, 12.1, 13.5, 13.6, 8.2,
            -2.8, -12.0, -15.5
        ],
        tooltip: {
            valueSuffix: '°C'
        }
    },
    {
      name: 'Temperature2',
      type: 'spline',
      data: [
          -12.4, -10.5, -16.2, 0.25, 10.0, 14.1, 15.5, 15.6, 10.2,
          -4.8, -14.0, -15.5
      ],
      tooltip: {
          valueSuffix: '°C'
      }
  }]
}

}
