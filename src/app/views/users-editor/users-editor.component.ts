import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';
import { ConfigsService } from 'src/app/services/configs.service';
import { Configs } from 'src/app/models/configs.model';

@Component({
  selector: 'app-users-editor',
  templateUrl: './users-editor.component.html',
  styleUrls: ['./users-editor.component.scss']
})
export class UsersEditorComponent implements OnInit {

  public user: Users;

  public form: FormGroup;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: UsersService,
    private configService: ConfigsService) {
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];

    this.service.findById(id).subscribe(user => {
      this.user = user;
      this.form = this.createForm(this.user);
    });
  }

  private createForm(user: Users): FormGroup {
    return this.fb.group({
      configs: [user.configs, Validators.required],
    });
  }

  public save(): void {
    Object.assign(this.user, this.form.value);

    this.service.save(this.user).subscribe(user => {
      this.router.navigate(['users'])
    });
  }

  public add(ConfigName: string) {
    if (ConfigName != '') {
      this.configService.findByName(ConfigName).subscribe(a => this.checkDups(a[0]))
    }

  }
  private checkDups(configInp: Configs) {
    let dupl: boolean = false
    if (configInp != null) {
      this.user.configs.forEach(function (config) {
        if (config.configName == configInp.configName) {
          dupl = true;
        }
      });
    }
    if (!dupl && configInp != null) {
      this.user.configs.push(configInp);
    }
  }

  public RemoveAt(index: number) {
    this.user.configs.splice(index, 1)
  }

}
