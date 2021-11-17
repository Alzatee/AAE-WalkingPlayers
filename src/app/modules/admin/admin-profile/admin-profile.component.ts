import { Component, OnInit } from '@angular/core';
import { UtilService } from '@shared/util.service';

@Component({
  selector: 'wp-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    this.utilService.hideMenuAnimation();
    this.utilService.hideMeteorsAnimation();
  }

}
