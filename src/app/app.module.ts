import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorServicesService } from '@core/interceptor/interceptor-services.service';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { BodyComponent } from './layout/body/body.component';

import { FacebookModule } from 'ngx-facebook';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    BodyComponent,
    PageNotFoundComponent,
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    // other imports   
    FacebookModule.forRoot()
  ],
  providers: [
      { // Interceptor propio.
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorServicesService,
        multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
