import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { delay, tap } from 'rxjs';
import { Admins } from 'src/app/models/admins.model';
import { AdminsService } from 'src/app/services/admins.service';
import { SessionsService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.scss']
})
export class MailsComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private service: AdminsService,
    private sessions: SessionsService) { }

  ngOnInit(): void {
    let id = this.sessions.loadAdminId();
    let idNum = 0;
    if(id) {
      idNum = +id;
    }
    this.service.findById(idNum).subscribe(a => {
                                                  this.admin = a;
                                                  this.form = this.createForm(a);
                                                  let scheduleArr = this.admin.schedule.split(' ');
                                                  this.cron1 = scheduleArr[0];
                                                  this.cron2 = scheduleArr[1];
                                                  this.cron3 = scheduleArr[2];
                                                  this.cron4 = scheduleArr[3];
                                                  this.cron5 = scheduleArr[4];
                                                });
  }

  public cron1: string = '';
  public cron2: string = '';
  public cron3: string = '';
  public cron4: string = '';
  public cron5: string = '';

  public admin: Admins = new Admins();
  public form: FormGroup
  public saveAlert: boolean = false;

  public submit(): void {
    this.admin.schedule = this.cron1 + ' ' + this.cron2 + ' ' + this.cron3 + ' ' + this.cron4 + ' ' + this.cron5
    Object.assign(this.admin, this.form.value)

    this.saveAlert = true;
    this.service.save(this.admin).pipe(delay(5000)).subscribe(a => this.saveAlert = false)
  }

  private createForm(admin: Admins): FormGroup {
    return this.fb.group({
      email: admin.email,
      errors: admin.errors,
      successes: admin.successes
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
