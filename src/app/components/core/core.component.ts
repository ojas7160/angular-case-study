import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { CountDownTimerIOComponent } from '../count-down-timer-io/count-down-timer-io.component';
import { CountDownTimerSubjectComponent } from '../count-down-timer-subject/count-down-timer-subject.component';
import { InfiniteScrollComponent } from '../infinite-scroll/infinite-scroll.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { StudentListComponent } from '../student-list/student-list.component';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit {
  components = {
    countDownIO: CountDownTimerIOComponent,
    countDownSubject: CountDownTimerSubjectComponent,
    infiniteScroll: InfiniteScrollComponent,
    products: ProductListComponent,
    students: StudentListComponent,
  };
  routes: Routes = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // for (let component in this.components) {
    //   this.routes.push({
    //     path: component.toString(),
    //     component: this.components[component],
    //   });
    // }
    // this.router.resetConfig(this.routes);
  }
}
