import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsModalWarningComponent } from './logs-modal-warning.component';

describe('LogsModalWarningComponent', () => {
  let component: LogsModalWarningComponent;
  let fixture: ComponentFixture<LogsModalWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsModalWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsModalWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
