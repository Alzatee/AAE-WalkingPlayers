import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
    providedIn: 'root'
})
export class UtilService {
    constructor() { }

    /*
    - Habilitar selección de animaciones básicas
    */
    public hideMeteorsAnimation(): void {
        //Meteoros
        let animateMeteors: any = document.getElementById("js-meteor-block");
        animateMeteors.style.display = "none";
    }
    public hideMenuAnimation(): void {
        //Menú
        let menu: any = document.getElementById("menu-wp");
        menu.classList.remove("wp-opacity-version-menu");
        //padding top en los componentes comúnes
        let containerRouter: any = document.getElementById("container-router");
        containerRouter.style.paddingTop = "130px";
    }

    /*
    - Habilitar selección de animaciones complejas
    */
    public showMeteorsAnimation(): void {
        //Meteoros
        let animateMeteors: any = document.getElementById("js-meteor-block");
        animateMeteors.style.display = "block";
    }
    public showMenuAnimation(): void {
        //Menú
        let menu: any = document.getElementById("menu-wp");
        menu.classList.add("wp-opacity-version-menu");
        //padding top en los componentes comúnes
        let containerRouter: any = document.getElementById("container-router");
        containerRouter.style.paddingTop = "0px";
    }

    /*
    - Copy clipboard
    */
    public copyClipboard(text: string): void {
        /* Get the text field */
        let copyText:string = text;

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText);

        /* Alert the copied text */
        Swal.fire({
            icon: 'success',
            html: `<p><strong>${copyText}</strong> ha sido copiado en el porta papeles</p>`,
            showConfirmButton: false,
            timer: 2000,
            backdrop: `
              rgba(0,0,0,.4)
              url("./assets/gif/modal-cat.gif")
              left top
              no-repeat
            `
          });
    }

}
