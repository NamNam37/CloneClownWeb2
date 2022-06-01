import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { LogsService } from 'src/app/services/logs.service';
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

  constructor(private service: LogsService) { }

  ngOnInit(): void {
  }

  public view(log: Logs): void {
    this.selected.emit(log)
  }

  public removeAt(index: number): void {
    this.service.delete(this.logs[index].id);
    this.logs.splice(index, 1)
  }
}
