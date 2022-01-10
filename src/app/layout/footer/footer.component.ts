import { Component, OnInit } from '@angular/core';
import { FireStorageFunctionsService } from '@core/services/fire-storage-functions/fire-storage-functions.service';
import { UtilService } from '@shared/util.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'wp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  informationWP: any;
  pageLink: string = window.location.href;
  pageTitle: string = String(document.title).replace(/\&/g, '%26');
  sweetBackdrop: string = `rgba(0,0,0,.4) url("./assets/gif/modal-cat.gif") left top no-repeat`;
  modalSharedCss: string = `
    <style>
      .share-list {display: flex; flex-direction: row;}
      .share-list i {font-size: 35px; color: #f3f3f3;}
      .share-list a {border-radius: 100px;width: 50px;height: 50px;padding: 7px;margin: 10px;cursor: pointer;overflow: hidden;
        img {width: 100%;height: 100%;filter: invert(100%);}
      }
      a.fb-h {background: #3b5998;}
      a.tw-h {background: #00acee;}
      a.wa-h {background: #00bfa5;}
      a.re-h {background: #ff5700;}
      a.pi-h {background: #c8232c;}
      // Page Styling
      * {margin: 0;pading: 0;box-sizing: border-box;}
      .share-buttons-container {display: flex;justify-content: center;align-items: center;width: 100%;}
    </style>
  `;

  modalSharedHtml: string = `
  <div class="share-buttons-container">
    <div class="share-list">
      <!-- FACEBOOK -->
      <a class="fb-h" onclick="window.open('http://www.facebook.com/sharer.php?u=${this.pageLink}&quote=${this.pageTitle}', 'sharer', 'toolbar=0,status=0,width=626,height=436'); return false;" target="_blank"><i class="fab fa-facebook-f"></i></a>
      <!-- TWITTER -->
      <a class="tw-h" onclick="window.open('https://twitter.com/intent/tweet?text=${this.pageTitle}&url=${this.pageLink}', 'sharer', 'toolbar=0,status=0,width=626,height=436'); return false;"  target="_blank"><i class="fab fa-twitter"></i></a>
      <!-- WHATSAPP-->
      <a class="wa-h" onclick="window.open('https://api.whatsapp.com/send?text=${this.pageLink}', 'sharer', 'toolbar=0,status=0,width=626,height=436'); return false;" data-action="share/whatsapp/share" target="_blank"><i class="fab fa-whatsapp"></i></a>
      <!-- REDDIT -->
      <a class="re-h" onclick="window.open('https://www.reddit.com/submit?url=${this.pageLink}', 'sharer', 'toolbar=0,status=0,width=626,height=436'); return false;" target="_blank"><i class="fab fa-reddit-alien"></i></a>
      <!-- PINTEREST -->
      <a data-pin-do="buttonPin" data-pin-config="none" class="pi-h" onclick="window.open('https://www.pinterest.com/pin/create/button/?&text=${this.pageTitle}&url=${this.pageLink}&description=${this.pageTitle}', 'sharer', 'toolbar=0,status=0,width=626,height=436'); return false;" target="_blank"><i class="fab fa-pinterest-p"></i></a>
    </div>
  </div>
`;

  constructor(
    public utilService: UtilService,
    private fireStorageFunctions: FireStorageFunctionsService
  ) { }

  ngOnInit(): void {
    this.getInformationWP();
  }

  getInformationWP(): void {
    this.fireStorageFunctions.getInformationWP().then(response => {
      this.informationWP = response;
    });
  }

  openTermsAndConditionsModal(): void {
    Swal.fire({
      html: this.informationWP.termsAndConditions,
      backdrop: this.sweetBackdrop,
      width: 1000,
      confirmButtonText: 'Entendido'
    });
  }

  openAboutUsModal(): void {
    Swal.fire({
      html: this.informationWP.aboutUs,
      backdrop: this.sweetBackdrop,
      width: 1000,
      confirmButtonText: 'Entendido'
    });
  }

  openRulesModal(): void {
    Swal.fire({
      html: this.informationWP.rules,
      backdrop: this.sweetBackdrop,
      width: 1000,
      confirmButtonText: 'Entendido'
    });
  }

  sharedPageModal(): void {
    Swal.fire({
      title: 'Compartir',
      html: `
        ${this.modalSharedCss}
        ${this.modalSharedHtml}
      `,
      backdrop: this.sweetBackdrop,
      confirmButtonText: 'Entendido'
    });
  }

}
