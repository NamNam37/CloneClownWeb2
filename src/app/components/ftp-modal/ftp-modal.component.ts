import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output()
  public exit: EventEmitter<boolean> = new EventEmitter<boolean>()

  Toggle() {
    this.visible = false;
    this.exit.emit();
  }

  handleChange(event: any) {
    this.visible = event;
    if(this.visible == false) {
    this.exit.emit();
    }
  }
}
