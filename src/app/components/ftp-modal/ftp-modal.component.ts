import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DestF } from './../../models/destF.model';

@Component({
  selector: 'app-ftp-modal',
  templateUrl: './ftp-modal.component.html',
  styleUrls: ['./ftp-modal.component.scss']
})
export class FtpModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public visible = false;

  @Input()
  public form: FormGroup;

  @Output()
  public exit: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  public save: EventEmitter<DestF> = new EventEmitter<DestF>();

  Toggle() {
    this.visible = false;
    this.exit.emit();
  }

  public saved(): void {
    this.save.emit();
  }

  handleChange(event: any) {
    this.visible = event;
    if (this.visible == false) {
      this.exit.emit();
    }
  }
}
