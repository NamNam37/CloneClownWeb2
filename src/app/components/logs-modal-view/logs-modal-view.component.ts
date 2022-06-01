import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Logs } from 'src/app/models/logs.model';
import { ImportsNotUsedAsValues } from 'typescript/lib/tsserverlibrary';

@Component({
  selector: 'app-logs-modal-view',
  templateUrl: './logs-modal-view.component.html',
  styleUrls: ['./logs-modal-view.component.scss']
})
export class LogsModalViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public logToView = new Logs();
  
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

}
