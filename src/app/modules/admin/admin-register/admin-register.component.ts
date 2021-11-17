import { Component, OnInit } from '@angular/core';
import { UtilService } from '@shared/util.service';

@Component({
  selector: 'wp-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})
export class AdminRegisterComponent implements OnInit {

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    this.utilService.hideMenuAnimation();
    this.utilService.hideMeteorsAnimation();
  }

}
