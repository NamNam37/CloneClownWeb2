import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-logs-modal-warning',
  templateUrl: './logs-modal-warning.component.html',
  styleUrls: ['./logs-modal-warning.component.scss']
})
export class LogsModalWarningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public visible = false;

  @Output()
  public confirm: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public exit: EventEmitter<void> = new EventEmitter<void>();

  Toggle() {
    this.visible = false;
    this.exit.emit();
  }

  handleChange(event: any) {
    this.visible = event;
    if (this.visible == false) {
      this.exit.emit();
    }
  }

  public confirmRemove(): void {
    this.confirm.emit();
  }
}
