// import { HttpClienModule } from "@angular/common/http";
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/services/in-memory-data.service';
// import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { FirstCpmComponent } from './first-cpm/first-cpm.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing-module';
import { HomeComponent } from './home/home.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { LoginComponent } from './login/login.component';

registerLocaleData(localeFr, 'fr')

function HttpLoaderFactory (http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    FirstCpmComponent,
    HeroDetailComponent,
    HomeComponent,
    HeroListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { 
      dataEncapsulation : false,
      passThruUnknownUrl: true,
     }
    ),
    BrowserAnimationsModule,
    TranslateModule.forRoot(
      {
        defaultLanguage: 'fr',
        loader : {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }
    ),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: 
  [
    {
      provide: LOCALE_ID, useValue: 'fr'
    },
    {
      provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
