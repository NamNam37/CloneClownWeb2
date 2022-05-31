import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Configs } from 'src/app/models/configs.model';
import { ConfigsService } from 'src/app/services/configs.service';

@Component({
  selector: 'app-configs-creator',
  templateUrl: './configs-creator.component.html',
  styleUrls: ['./configs-creator.component.scss']
})
export class ConfigsCreatorComponent implements OnInit {

  public config: Configs = new Configs();

  public form: FormGroup;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: ConfigsService
  ) {
  }

  ngOnInit(): void {
    this.form = this.createForm();
    this.config.configName = "default";
    this.config.type = "full";
    this.config.schedule = "* * * * *"
  }

  private createForm(): FormGroup {
    return this.fb.group({
      configName: "default",
      packageCount: 0,
      backupCount: 0,
      isZIP: false
    });
  }

}
