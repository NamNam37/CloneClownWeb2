import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Configs } from 'src/app/models/configs.model';

@Component({
  selector: 'app-configs-table',
  templateUrl: './configs-table.component.html',
  styleUrls: ['./configs-table.component.scss']
})
export class ConfigsTableComponent implements OnInit {

  @Input()
  public configs: Configs[] = [];

  @Output()
  public selected: EventEmitter<Configs> = new EventEmitter<Configs>();

  public edit(config: Configs): void {
    this.selected.emit(config);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
