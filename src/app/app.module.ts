import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorServicesService } from '@core/interceptor/interceptor-services.service';

//Components
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { BodyComponent } from './layout/body/body.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

//Modules
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { FacebookModule } from 'ngx-facebook';//Para chat o (eliminar) si no voy a suar chat messenger.

//Firebase Modules
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '@env/environment';


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
    BrowserAnimationsModule,
    AppRoutingModule,
    // other imports   
    FacebookModule.forRoot(),
    //Firebase Config Modules
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule //Módulo de autentificación de Firebase.
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
