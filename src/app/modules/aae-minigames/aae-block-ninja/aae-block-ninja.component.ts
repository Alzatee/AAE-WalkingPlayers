import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '@shared/util.service';
declare const playAlzaNinjaMinigame: any;
declare const hideMenu: any;
declare const showMenu: any;

@Component({
  selector: 'wp-aae-block-ninja',
  templateUrl: './aae-block-ninja.component.html',
  styleUrls: ['./aae-block-ninja.component.scss']
})
export class AaeBlockNinjaComponent implements OnInit, OnDestroy {

  constructor(
    private utilService: UtilService,
    private _router: Router,
    //Destruir este componente y sus animaciones al cambiar de ruta o al ir a otro
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    playAlzaNinjaMinigame();
    hideMenu();
    this.utilService.hideMenuAnimation();
    this.utilService.hideMeteorsAnimation();
    let containerRouter: any = document.getElementById("container-router");
    containerRouter.style.paddingTop = "0px";
  }

  leaveGame() {
    showMenu();
    //Destruir componentes para remover javascript de juego y redireccionar al inicio. Recarga silenciosa interna.
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.elementRef.nativeElement.remove();
    this.leaveGame();
  }

  playButtonSound(): void {
    let audio = new Audio();
    audio.src = './assets/sounds/select-button-sound.wav';
    audio.load();
    audio.play();
  }

}
