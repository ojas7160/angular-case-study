import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  timeCount = new Subject<number>();
  logs = new Subject<string[]>();
  timeAction = new Subject<any>();

  resetEmitter = new Subject<any>();
  constructor() {}

  setTimeCount(time: number) {
    this.timeCount.next(time);
  }

  setLogs(logs: string[]) {
    this.logs.next(logs);
  }

  setTimeAction(d: any) {
    this.timeAction.next(d);
  }
  setResetEmitter(d: any) {
    this.resetEmitter.next(d);
  }
}
