import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Configs } from 'src/app/models/configs.model';
import { DestF } from 'src/app/models/destF.model';
import { ConfigsService } from 'src/app/services/configs.service';

@Component({
  selector: 'app-configs-editor',
  templateUrl: './configs-editor.component.html',
  styleUrls: ['./configs-editor.component.scss']
})
export class ConfigsEditorComponent implements OnInit {

  public config: Configs;

  public form: FormGroup;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: ConfigsService
  ) {
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];

    this.service.findById(id).subscribe(config => {
      this.config = config;
      this.form = this.createForm(this.config);
    });
  }

  private createForm(config: Configs): FormGroup {
    return this.fb.group({
      configName: config.configName,
      packageCount: config.packageCount,
      backupCount: config.backupCount,
      isZIP: config.isZIP
    });
  }
}
