import { Component } from '@angular/core';

@Component({
  selector: 'app-chart-product',
  templateUrl: './chart-product.component.html',
  styleUrls: ['./chart-product.component.css']
})
export class ChartProductComponent {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: false
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: String = 'bar';
  public barChartLegend: Boolean = true;

  public barChartData: any[] = [
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }



}
