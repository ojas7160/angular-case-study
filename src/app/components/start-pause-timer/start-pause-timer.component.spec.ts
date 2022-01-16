import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPauseTimerComponent } from './start-pause-timer.component';

describe('StartPauseTimerComponent', () => {
  let component: StartPauseTimerComponent;
  let fixture: ComponentFixture<StartPauseTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPauseTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPauseTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
