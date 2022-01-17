import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements OnInit {
  divs: number[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i < 26; i++) {
      this.divs.push(i);
    }
  }

  onScroll() {
    let divLength = this.divs.length;
    for (let i = divLength; i < 26 + divLength; i++) {
      this.divs.push(i);
    }
  }

  divClicked(whichDiv: number) {
    alert('You clicked div number : ' + whichDiv);
  }
}
