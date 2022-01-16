import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UtilityService } from 'src/app/services/utility/utility.service';
interface Log {
  type: string;
  time: number;
}

@Component({
  selector: 'app-start-pause-timer',
  templateUrl: './start-pause-timer.component.html',
  styleUrls: ['./start-pause-timer.component.scss'],
})
export class StartPauseTimerComponent implements OnInit {
  @Output() timeAction = new EventEmitter<{ time: number; type: string }>();
  @Output() resetEmitter = new EventEmitter<boolean>();
  @Input() resetAll: any;
  @Input() route: string = '';
  timeCount: number = 0;
  updatedTimeCount: number = 0;
  pauseTime: number = 0;
  logs: Log[] = [];
  type = '';

  constructor(private utilityService: UtilityService) {
    this.utilityService.timeCount.subscribe((res) => {
      this.updatedTimeCount = res;
      if (res == 0) {
        this.reset();
      }
    });
  }

  ngOnInit(): void {
    this.reset();
    if (this.route == 'subject') {
      this.utilityService.timeCount.subscribe((res) => {
        this.updatedTimeCount = res;
        if (res == 0) {
          this.reset();
        }
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.route != 'subject') {
      this.updatedTimeCount =
        changes['resetAll'] && changes['resetAll'].currentValue;
      if (changes['resetAll'].currentValue == 0) {
        this.reset();
      }
    }
  }

  startPause() {
    if (!this.timeCount) {
      return alert('Please enter some time count');
    }
    if (!this.type.length) {
      this.type = 'start';
    } else if (this.type == 'start') {
      this.type = 'pause';
    } else {
      this.type = 'start';
    }
    this.type == 'pause' &&
      this.logs.push({ type: this.type, time: this.updatedTimeCount });

    let time = this.updatedTimeCount ? this.updatedTimeCount : this.timeCount;
    if (this.route == 'subject') {
      this.utilityService.setTimeAction({ time: time, type: this.type });
      this.utilityService.setTimeCount(time);
    } else this.timeAction.emit({ time: time, type: this.type });
  }

  reset() {
    this.type = '';
    this.timeCount = 0;
    this.updatedTimeCount = 0;
    this.logs = [];
    if (this.route == 'subject') {
      this.utilityService.setResetEmitter(true);
    } else this.resetEmitter.emit(true);
  }
}
