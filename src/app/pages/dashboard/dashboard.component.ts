import { Component, OnInit } from '@angular/core';
import { StatisticService } from '../../services/statistic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;

  constructor(
    private _statisticService: StatisticService
  ) { }

  ngOnInit() {
    this._statisticService.getGeneralStatistic().subscribe(
      res => this.data = res,
      error => console.log(error)
    );
  }


}
