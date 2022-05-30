import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/components/ftp-modal/ftp-modal.component.spec.ts
import { FtpModalComponent } from './ftp-modal.component';

describe('FtpModalComponent', () => {
  let component: FtpModalComponent;
  let fixture: ComponentFixture<FtpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtpModalComponent ]
========
import { UsersModalComponent } from './users-modal.component';

describe('UsersModalComponent', () => {
  let component: UsersModalComponent;
  let fixture: ComponentFixture<UsersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersModalComponent ]
>>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad:src/app/components/users-modal/users-modal.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<<< HEAD:src/app/components/ftp-modal/ftp-modal.component.spec.ts
    fixture = TestBed.createComponent(FtpModalComponent);
========
    fixture = TestBed.createComponent(UsersModalComponent);
>>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad:src/app/components/users-modal/users-modal.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
