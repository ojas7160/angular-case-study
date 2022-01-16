import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility/utility.service';
@Component({
  selector: 'app-count-down-timer-io',
  templateUrl: './count-down-timer-io.component.html',
  styleUrls: ['./count-down-timer-io.component.scss'],
})
export class CountDownTimerIOComponent implements OnInit {
  @Input() route: string = '';
  timeCount: number = 0;
  interval: any;
  logs: string[] = [];

  constructor(private utilityService: UtilityService) {
    this.utilityService.timeAction.subscribe((res) => {
      this.setTimeAction(res);
    });

    this.utilityService.resetEmitter.subscribe((res) => {
      if (res) {
        this.reset(res);
      }
    });
  }

  ngOnInit(): void {
    if (this.route == 'subject') {
      this.utilityService.setTimeCount(this.timeCount);
    }
  }

  setTimeAction(e: { type: string; time: number }) {
    this.timeCount = e.time;
    if (this.route == 'subject') {
      this.utilityService.setTimeCount(this.timeCount);
    }
    if (e.type == 'start') {
      this.logs.push('Started at: ' + new Date().toLocaleString());
    } else {
      this.logs.push('Paused at: ' + new Date().toLocaleString());
    }
    if (this.route == 'subject') {
      this.utilityService.setLogs(this.logs);
    }
    if (e.type == 'start') {
      this.interval = setInterval(this.updateTime.bind(this), 1000);
    } else {
      this.resetInterval();
    }
  }

  updateTime() {
    if (this.timeCount) {
      this.timeCount -= 1;
      this.route == 'subject' &&
        this.utilityService.setTimeCount(this.timeCount);
    } else {
      this.resetInterval();
    }
  }

  resetInterval() {
    clearInterval(this.interval);
  }

  reset(e: boolean) {
    this.logs = [];
    this.timeCount = 0;
  }
}
