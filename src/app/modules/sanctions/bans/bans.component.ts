import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { UtilService } from '@shared/util.service';

@Component({
  selector: 'wp-bans',
  templateUrl: './bans.component.html',
  styleUrls: ['./bans.component.scss']
})
export class BansComponent implements OnInit {
  urlBanListWalkingPlayers: string = '';

  constructor(private utilService: UtilService) {
    this.urlBanListWalkingPlayers = environment.urlWalkingPlayerSanctions.bans;
  }

  ngOnInit(): void {
    this.utilService.hideMenuAnimation();
    this.utilService.hideMeteorsAnimation();
  }

}
