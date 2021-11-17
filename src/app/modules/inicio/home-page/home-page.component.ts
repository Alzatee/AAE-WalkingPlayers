import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment.dev';
import { UtilService } from '@shared/util.service';
declare const animationHomeParallax: any;
declare const animationHomeMeteors: any;
declare const animationMouseMoveImg: any;

@Component({
  selector: 'wp-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  urlShopNewsWalkingPlayers: string = '';

  constructor(private utilService: UtilService) {
    this.urlShopNewsWalkingPlayers = environment.urlShopNewsWalkingPlayers;
   }

  ngOnInit(): void {
    animationHomeParallax();
    animationHomeMeteors();
    animationMouseMoveImg();
    this.utilService.showMenuAnimation();
    this.utilService.showMeteorsAnimation();
  }

}
