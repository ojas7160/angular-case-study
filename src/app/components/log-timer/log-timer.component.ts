import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-log-timer',
  templateUrl: './log-timer.component.html',
  styleUrls: ['./log-timer.component.scss'],
})
export class LogTimerComponent implements OnInit {
  @Input() logs: string[] = [];
  @Input() route: string = '';
  constructor(private utilityService: UtilityService) {
    this.utilityService.resetEmitter.subscribe((res) => {
      if (res) {
        this.logs = [];
      }
    });
  }

  ngOnInit(): void {
    if (this.route == 'subject') {
      this.utilityService.logs.subscribe((res) => (this.logs = res));
    }
  }
}
