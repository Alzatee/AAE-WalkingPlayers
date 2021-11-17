import { Component, OnInit } from '@angular/core';
import { UtilService } from '@shared/util.service';

@Component({
  selector: 'wp-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    this.utilService.hideMenuAnimation();
    this.utilService.hideMeteorsAnimation();
  }

}
