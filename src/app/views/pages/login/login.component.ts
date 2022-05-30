import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { SessionsService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form: FormGroup;
  public wrongCreds: boolean;

  constructor(private fb: FormBuilder,
              private router: Router,
              private service: SessionsService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: [ '', Validators.required ],
      password: [ '', Validators.required ],
    });
  }

  public login(): void {
    this.service.login(this.form.value).pipe(
      filter(result => result === true)
    ).subscribe(() => this.router.navigate(['/dashboard']));

    this.service.login(this.form.value).pipe(
      filter(result => result === false)
    ).subscribe(() => this.wrongCreds = true);
  }

}
