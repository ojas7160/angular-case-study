import { Component, OnInit } from '@angular/core';

interface Price {
  id: number;
  name: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  prices: Price[] = [
    { id: 1, name: 'Low to high' },
    { id: 2, name: 'High to low' },
  ];

  grid: boolean = true;

  items: number[] = [];
  selectedPrice = null;

  constructor() {}

  ngOnInit(): void {
    this.reset();
  }

  priceFilter(filter: number | null) {
    if (filter == 1) {
      this.reset();
    } else {
      this.items = this.items.reverse();
    }
  }

  reset() {
    this.items = [];
    for (let i = 1; i < 41; i++) {
      this.items.push(i);
    }
  }
}
