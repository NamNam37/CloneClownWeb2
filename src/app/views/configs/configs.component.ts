import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configs } from 'src/app/models/configs.model';
import { ConfigsService } from 'src/app/services/configs.service';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.scss']
})
export class ConfigsComponent implements OnInit {

  public configs: Configs[] = []

  constructor(private router: Router,
    private service: ConfigsService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(a => this.configs = a);
  }

  public edit(config: Configs): void {
    this.router.navigate(['configs-editor', config.id]);
  }

}
