import { Component, OnInit } from "@angular/core";
import { StatisticService } from "../../services/statistic.service";

@Component({
  selector: "app-chart-customer",
  templateUrl: "./chart-customer.component.html",
  styleUrls: ["./chart-customer.component.css"]
})
export class ChartCustomerComponent implements OnInit{

  topCustomer: any;
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels: string[] = [];
  barChartType: String = "bar";
  barChartLegend: Boolean = true;

  barChartData: any =  [{ data: [], label: "Customers" }];

  constructor(private _statisticService: StatisticService) {}

  ngOnInit() {
    this._statisticService
      .getTopCustomers()
      .subscribe(
        res => {
          this.barChartLabels = res.map( item => item.name );
          this.barChartData[0].data = res.map( item => item.isInOrder );
        },
        error => console.log(error));

  }

}
