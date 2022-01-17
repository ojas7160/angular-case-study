import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from 'src/app/components/timer/timer.component';
import { StartPauseTimerComponent } from 'src/app/components/start-pause-timer/start-pause-timer.component';
import { LogTimerComponent } from 'src/app/components/log-timer/log-timer.component';
import { CountDownTimerIOComponent } from 'src/app/components/count-down-timer-io/count-down-timer-io.component';
import { CountDownTimerSubjectComponent } from 'src/app/components/count-down-timer-subject/count-down-timer-subject.component';
import { StudentListComponent } from 'src/app/components/student-list/student-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { InfiniteScrollComponent } from 'src/app/components/infinite-scroll/infinite-scroll.component';

@NgModule({
  declarations: [
    ProductListComponent,
    TimerComponent,
    StartPauseTimerComponent,
    LogTimerComponent,
    CountDownTimerIOComponent,
    CountDownTimerSubjectComponent,
    StudentListComponent,
    InfiniteScrollComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, FormsModule, InfiniteScrollModule],
})
export class CoreModule {}
