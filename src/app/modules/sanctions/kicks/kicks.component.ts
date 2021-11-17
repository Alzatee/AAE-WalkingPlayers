import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { UtilService } from '@shared/util.service';

@Component({
  selector: 'wp-kicks',
  templateUrl: './kicks.component.html',
  styleUrls: ['./kicks.component.scss']
})
export class KicksComponent implements OnInit {
  urlKickListWalkingPlayers: string = '';

  constructor(private utilService: UtilService) {
    this.urlKickListWalkingPlayers = environment.urlWalkingPlayerSanctions.kicks;
  }

  ngOnInit(): void {
    this.utilService.hideMenuAnimation();
    this.utilService.hideMeteorsAnimation();
  }

}
