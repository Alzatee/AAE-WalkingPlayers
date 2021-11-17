import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { UtilService } from '@shared/util.service';

@Component({
  selector: 'wp-mutes',
  templateUrl: './mutes.component.html',
  styleUrls: ['./mutes.component.scss']
})
export class MutesComponent implements OnInit {
  urlMuteListWalkingPlayers: string = '';
  
  constructor(private utilService: UtilService) {
    this.urlMuteListWalkingPlayers = environment.urlWalkingPlayerSanctions.mutes;
  }

  ngOnInit(): void {
    this.utilService.hideMenuAnimation();
    this.utilService.hideMeteorsAnimation();
  }

}
