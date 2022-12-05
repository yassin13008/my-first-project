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
import { FormsModule } from '@angular/forms';

registerLocaleData(localeFr, 'fr')

function HttpLoaderFactory (http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    FirstCpmComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
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
    FormsModule
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
