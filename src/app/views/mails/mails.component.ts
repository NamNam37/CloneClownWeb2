import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Admins } from 'src/app/models/admins.model';
import { AdminsService } from 'src/app/services/admins.service';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.scss']
})
export class MailsComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private service: AdminsService) { }
  ngOnInit(): void {
  }

  public cron1: string = '';
  public cron2: string = '';
  public cron3: string = '';
  public cron4: string = '';
  public cron5: string = '';

  public admin: Admins = new Admins();
  public form: FormGroup = this.createForm();

  public submit(): void {
    this.admin.schedule = this.cron1 + ' ' + this.cron2 + ' ' + this.cron3 + ' ' + this.cron4 + ' ' + this.cron5
    console.log(this.admin);

    //this.service.save(this.admin).subscribe()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      email: "",
      errors: "",
      successes: ""
    });
  }

  public onChange1(value: string): void {
    this.cron1 = value
  }
  public onChange2(value: string): void {
    this.cron2 = value
  }
  public onChange3(value: string): void {
    this.cron3 = value
  }
  public onChange4(value: string): void {
    this.cron4 = value
  }
  public onChange5(value: string): void {
    this.cron5 = value
  }
}
