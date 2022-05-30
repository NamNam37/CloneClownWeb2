import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Logs} from "../../models/logs.model";

@Component({
  selector: 'app-logs-table',
  templateUrl: './logs-table.component.html',
  styleUrls: ['./logs-table.component.scss']
})
export class LogsTableComponent implements OnInit {

  @Input()
  public logs: Logs[] = [];

  @Output()
  public selected: EventEmitter<Logs> = new EventEmitter<Logs>();

  constructor() { }

  ngOnInit(): void {
  }

}
