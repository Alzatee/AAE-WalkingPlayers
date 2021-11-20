import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CInformationWP } from '@core/class/information-wp';
import { FireStorageFunctionsService } from '@core/services/fire-storage-functions/fire-storage-functions.service';
import { UtilService } from '@shared/util.service';

@Component({
  selector: 'wp-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.scss']
})
export class ConfigPageComponent implements OnInit {
  authForm: FormGroup;
  informationWP: any;

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
      aboutUs: [null, Validators.required]
    });
  }

  getInformationWP(): void {
    this.fireStorageFunctions.getInformationWP().then(response => {
      this.informationWP = response;

      //Set values Form
      this.authForm.patchValue({
        termsAndConditions: this.informationWP.termsAndConditions,
        aboutUs: this.informationWP.aboutUs
      });

      console.log('respuesta del servicio de información WP', this.informationWP);
    });
  }

  saveForm(authForm: any): void {
    const formValue = new CInformationWP();
    formValue.termsAndConditions = authForm.termsAndConditions;
    formValue.aboutUs = authForm.aboutUs;
    formValue.idDocument = this.informationWP.idDocument;
    this.fireStorageFunctions.updateInformationWP(formValue, formValue.idDocument);
  }

}
