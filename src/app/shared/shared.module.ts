//Importaciones cómunes
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '@shared/pipes/safe.pipe';
import { FooterComponent } from './../layout/footer/footer.component';
import { ModalLoadComponent } from './components/modal-load/modal-load.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

//Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';

/*Componentes de Angular Material*/
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


const materialModules = [
    MatButtonToggleModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
];

@NgModule({
    declarations: [
        SafePipe,
        FooterComponent,
        ModalLoadComponent,
        AuthFormComponent
    ],
    imports: [
        CommonModule,
        materialModules,
        FormsModule,
        ReactiveFormsModule,
        AngularEditorModule
    ],
    exports: [
        CommonModule,
        materialModules,
        SafePipe,
        FooterComponent,
        ModalLoadComponent,
        AuthFormComponent,
        FormsModule,
        ReactiveFormsModule,
        AngularEditorModule
    ]
})

export class SharedModule { }