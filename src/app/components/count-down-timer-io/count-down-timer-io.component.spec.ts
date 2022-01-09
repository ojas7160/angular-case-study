import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownTimerIOComponent } from './count-down-timer-io.component';

describe('CountDownTimerIOComponent', () => {
  let component: CountDownTimerIOComponent;
  let fixture: ComponentFixture<CountDownTimerIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownTimerIOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTimerIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
