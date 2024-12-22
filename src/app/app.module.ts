import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Chart1Component } from './chart1/chart1.component';
import { Chart2Component } from './chart2/chart2.component';
import { Chart3Component } from './chart3/chart3.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import { Chart4Component } from './chart4/chart4.component';
// import { Chart5Component } from './chart5/chart5.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Chart1Component,
    Chart2Component,
    Chart3Component,
    Chart4Component,
    // Chart5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
