import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { UtilService } from '@shared/util.service';

@Component({
  selector: 'wp-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit, OnDestroy {

  constructor(
    private utilService: UtilService,
    //Destruir este componente y sus animaciones al cambiar de ruta o al ir a otro
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.utilService.hideMenuAnimation();
    this.utilService.hideMeteorsAnimation();
  }

  ngOnDestroy() {
    this.elementRef.nativeElement.remove();
  }

}
