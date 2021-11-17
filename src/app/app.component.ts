import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { environment } from '@env/environment';
import { ModalLoadServicesService } from '@core/services/modal-load-services/modal-load-services.service';
import { timer } from 'rxjs';

@Component({
  selector: 'wp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WalkingPlayersPage';
  pageEnvironment = environment.environmentName;

  constructor(
    private facebookService: FacebookService,
    public modalLoadServicesService: ModalLoadServicesService
    ) { }

  ngOnInit(): void {
    this.initFacebookService();
  }

  private initFacebookService(): void {
    const initParams: InitParams = { xfbml: true, version: 'v3.2' };
    this.facebookService.init(initParams);
  }
}
