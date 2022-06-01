import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsModalViewComponent } from './logs-modal-view.component';

describe('LogsModalViewComponent', () => {
  let component: LogsModalViewComponent;
  let fixture: ComponentFixture<LogsModalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsModalViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsModalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
