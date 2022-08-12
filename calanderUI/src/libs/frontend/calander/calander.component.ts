import { Component, OnInit } from '@angular/core';
import { genMonth } from 'src/libs/Helper/functions';

@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.scss'],
})
export class CalanderComponent implements OnInit {
  constructor() {
    this.today = new Date().getDate();
    console.log('today', this.today);
  }
  month: any;

  today: number;
  weekdays = [
    {
      name: 'Mon',
    },
    {
      name: 'Tue',
    },
    {
      name: 'Wed',
    },
    {
      name: 'Thu',
    },
    {
      name: 'Fri',
    },
    {
      name: 'Sat',
    },
    {
      name: 'Sun',
    },
  ];


  ngOnInit(): void {

    this.month = genMonth(8, 2022);
    console.log(this.month);
  }
}
