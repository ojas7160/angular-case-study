import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountDownTimerIOComponent } from 'src/app/components/count-down-timer-io/count-down-timer-io.component';
import { CountDownTimerSubjectComponent } from 'src/app/components/count-down-timer-subject/count-down-timer-subject.component';
import { InfiniteScrollComponent } from 'src/app/components/infinite-scroll/infinite-scroll.component';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { StudentListComponent } from 'src/app/components/student-list/student-list.component';

const routes: Routes = [
  { path: 'products', pathMatch: 'full', component: ProductListComponent },
  { path: 'count-down-io', component: CountDownTimerIOComponent },
  { path: 'count-down-subject', component: CountDownTimerSubjectComponent },
  { path: 'infinite-scroll', component: InfiniteScrollComponent },
  { path: 'students', component: StudentListComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
