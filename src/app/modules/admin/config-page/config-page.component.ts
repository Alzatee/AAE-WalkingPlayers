import { Component, OnInit } from '@angular/core';
import { UtilService } from '@shared/util.service';

@Component({
  selector: 'wp-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.scss']
})
export class ConfigPageComponent implements OnInit {

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    this.utilService.hideMenuAnimation();
    this.utilService.hideMeteorsAnimation();
  }

}
