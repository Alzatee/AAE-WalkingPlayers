import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { UtilService } from '@shared/util.service';

@Component({
  selector: 'wp-warnings',
  templateUrl: './warnings.component.html',
  styleUrls: ['./warnings.component.scss']
})
export class WarningsComponent implements OnInit {
  urlWarningListWalkingPlayers: string = '';
  
  constructor(private utilService: UtilService) {
    this.urlWarningListWalkingPlayers = environment.urlWalkingPlayerSanctions.warnings;
  }

  ngOnInit(): void {
    this.utilService.hideMenuAnimation();
    this.utilService.hideMeteorsAnimation();
  }

}
