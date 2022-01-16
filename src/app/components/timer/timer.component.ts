import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() timeCount: number = 0;
  @Input() route: string = '';
  subscriber: Subscription | undefined;

  constructor(private utilityService: UtilityService) {
    this.utilityService.resetEmitter.subscribe((res) => {
      if (res) {
        this.timeCount = 0;
      }
    });
  }

  ngOnInit(): void {
    if (this.route == 'subject') {
      this.subscriber = this.utilityService.timeCount.subscribe(
        (res) => (this.timeCount = res)
      );
    }
  }

  ngOnChanges(changes: SimpleChanges) {}

  ngOnDestroy(): void {
    this.subscriber && this.subscriber.unsubscribe();
  }
}
