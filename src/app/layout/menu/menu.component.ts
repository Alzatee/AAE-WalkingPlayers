import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { CommonService } from '@core/services/common/common.service';
import Swal from 'sweetalert2'
import { UtilService } from '@shared/util.service';
declare const menuAnimationScroll: any;

@Component({
  selector: 'wp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  walkingPlayersInformationMinecraft: any;
  urlShopWalkingPlayers: string = '';

  constructor(
    private commonService: CommonService,
    public utilService: UtilService
  ) {
    this.urlShopWalkingPlayers = environment.urlShopWalkingPlayers;
  }

  ngOnInit(): void {
    menuAnimationScroll();
    this.getWalkingPlayersInformationMinecraft();
  }

  getWalkingPlayersInformationMinecraft(): void {
    this.commonService.walkingPlayersInformationMinecraft()
      .subscribe((result: any) => {
        this.walkingPlayersInformationMinecraft = result;
        console.log(result);
      }, (error: HttpErrorResponse) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: error.name,
          text: error.message
        });
      });
  }


}
