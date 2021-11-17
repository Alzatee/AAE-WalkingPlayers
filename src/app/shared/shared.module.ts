//Importaciones cómunes
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '@shared/pipes/safe.pipe';
import { FooterComponent } from './../layout/footer/footer.component';

/*Componentes de Angular Material*/
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { ModalLoadComponent } from './components/modal-load/modal-load.component';

const materialModules = [
    MatButtonToggleModule,
    MatButtonModule
];

@NgModule({
    declarations: [
        SafePipe,
        FooterComponent,
        ModalLoadComponent
    ],
    imports: [
        CommonModule,
        materialModules
    ],
    exports: [
        CommonModule,
        materialModules,
        SafePipe,
        FooterComponent,
        ModalLoadComponent
    ]
  })

export class SharedModule {}