import { Component, OnInit } from '@angular/core';
import { StatisticService } from '../../services/statistic.service';

@Component({
  selector: 'app-chart-product',
  templateUrl: './chart-product.component.html',
  styleUrls: ['./chart-product.component.css']
})
export class ChartProductComponent implements OnInit {

  topCustomer: any;
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels: string[] = [];
  barChartType: String = "bar";
  barChartLegend: Boolean = true;

  barChartData: any = [{ data: [], label: "Products" }];

  constructor(private _statisticService: StatisticService) { }

  ngOnInit() {
    this._statisticService
      .getTopProducts()
      .subscribe(
        res => {
          this.barChartLabels = res.map(item => item.description);
          this.barChartData[0].data = res.map(item => item.isInOrder);
          console.log(this.barChartLabels);
        },
        error => console.log(error));

  }



}
