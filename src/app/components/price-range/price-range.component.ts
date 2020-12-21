import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-price-range',
  templateUrl: './price-range.component.html',
  styleUrls: ['./price-range.component.css'],
})
export class PriceRangeComponent implements OnInit {
  value: number = 954;
  highValue: number = 1200;
  options: Options = {
    floor: 846,
    ceil: 1392,
    hideLimitLabels: true,
  };

  constructor() {}

  ngOnInit(): void {}
}
