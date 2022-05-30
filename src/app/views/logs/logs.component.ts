import { Component, OnInit } from '@angular/core';
import {Logs} from "../../models/logs.model";
import {Router} from "@angular/router";
import {LogsService} from "../../services/logs.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  logs: Observable<Logs[]>;

  constructor(private router: Router,
    private service: LogsService) { }

  ngOnInit(): void {
    this.logs = this.service.findAll()
  }

}
