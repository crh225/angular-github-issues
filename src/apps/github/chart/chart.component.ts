import { Component, OnInit, Input } from '@angular/core';

import { Repo } from '@app/github/shared/models';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {
  @Input() repo: Repo;

  public barChartLabels: string[] = ['Stargazers', 'Forks', 'Watchers', 'Open issues'];
  public barChartLegend = false;
  public barChartColors = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(0, 255, 0, 0.2)',
        'rgba(102, 0, 204, 0.2)',
        'rgba(255, 128, 0, 0.2)'
      ]
    }
  ];
  public barChartOptions: any = {
    responsive: true,
    scaleShowVerticalLines: false,

  };
  public barChartType = 'bar';
  public barChartData: any[] = [];

  ngOnInit() {
    this.barChartData.push(
      {
        data: [
          this.repo.stargazers_count,
          this.repo.forks_count,
          this.repo.watchers_count,
          this.repo.open_issues_count,
        ]
      }
    );
  }
}
