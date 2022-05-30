import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Users } from "src/app/models/users.model";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.component.html',
  styleUrls: ['./users-modal.component.scss']
})
export class UsersModalComponent implements OnInit {

  users: Users[] = [];
  @Input()
  public visible: boolean = false;

  @Output()
  public back: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(a => this.users = a.filter(a => !a.verified))
  }

  changeAt(index: number): void {
    this.users[index].verified = !this.users[index].verified
  }

  Toggle(): void {
    this.visible = !this.visible;
    this.back.emit(this.visible);
  }

  handleChange(event: any) {
    this.visible = event;
    this.back.emit(this.visible);
  }

  Save(): void {
    this.users.forEach(a => this.service.save(a));
    this.visible = false;
    this.back.emit(this.visible);
    window.location.reload();
  }
}
