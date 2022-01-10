import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CInformationWP } from '@core/class/information-wp';
import { FireStorageFunctionsService } from '@core/services/fire-storage-functions/fire-storage-functions.service';
import { UtilService } from '@shared/util.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'wp-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.scss']
})
export class ConfigPageComponent implements OnInit {
  authForm: FormGroup;
  informationWP: any;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    maxHeight: 'auto',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    sanitize: false,
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Roboto',
    fonts: [
      { class: 'font-roboto', name: 'Roboto' },
      { class: 'font-lato', name: 'Lato' },
      { class: 'font-amatic-sc', name: 'Amatic SC' },
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' }
    ],
    customClasses: [
      {
        name: 'Tabla',
        class: '<!--',
        tag: 'table class="table table-bordered"><tr><td>contenido</td><td>contenido</td></tr></table> <!-- '
      }
    ]
  };

  constructor(
    private utilService: UtilService,
    private formBuilder: FormBuilder,
    private fireStorageFunctions: FireStorageFunctionsService
  ) {
    this.authForm = this.formBuilder.group({});
    this.validatedForm();
  }

  ngOnInit(): void {
    this.utilService.hideMenuAnimation();
    this.utilService.hideMeteorsAnimation();
    this.getInformationWP();
  }

  validatedForm() {
    this.authForm = this.formBuilder.group({
      termsAndConditions: [null, Validators.required],
      aboutUs: [null, Validators.required],
      rules: [null, Validators.required],
    });
  }

  getInformationWP(): void {
    this.fireStorageFunctions.getInformationWP().then(response => {
      this.informationWP = response;

      //Set values Form
      this.authForm.patchValue({
        termsAndConditions: this.informationWP.termsAndConditions,
        aboutUs: this.informationWP.aboutUs,
        rules: this.informationWP.rules
      });
    });
  }

  saveForm(authForm: any): void {
    const formValue = new CInformationWP();
    formValue.termsAndConditions = authForm.termsAndConditions;
    formValue.aboutUs = authForm.aboutUs;
    formValue.rules = authForm.rules;
    formValue.idDocument = this.informationWP.idDocument;
    this.fireStorageFunctions.updateInformationWP(formValue, formValue.idDocument);
  }

}
