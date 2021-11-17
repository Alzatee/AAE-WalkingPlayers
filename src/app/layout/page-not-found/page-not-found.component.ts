import { Component, OnInit } from '@angular/core';
import { UtilService } from '@shared/util.service';

@Component({
  selector: 'wp-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private utilService: UtilService) {}

  ngOnInit(): void {
    this.utilService.showMenuAnimation();
    this.utilService.hideMeteorsAnimation();
  }

}
