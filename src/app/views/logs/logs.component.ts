import { Component, OnInit } from '@angular/core';
import {Logs} from "../../models/logs.model";
import {Router} from "@angular/router";
import {LogsService} from "../../services/logs.service";
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  logs: Observable<Logs[]>;
  loaded: boolean = false;
  visibleRemove: boolean = false;
  visibleView: boolean = false;
  logToView: Logs = new Logs;

  constructor(private router: Router,
    private service: LogsService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(a => this.loaded = true)
    this.logs = this.service.findAll()
  }

  public confirmModal(): void {
    this.visibleRemove = true;
  }

  public viewModal(log: Logs): void {
    this.logToView = log;
    this.visibleView = true;
  }

  public exitRemove(): void {
    this.visibleRemove = false;
  }
  public exitView(): void {
    this.visibleView = false;
  }

  public removeAll(): void {
    this.visibleRemove = false;
    this.service.deleteAll()
    this.logs = of([])
  }

}
