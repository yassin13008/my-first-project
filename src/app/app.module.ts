// import { HttpClienModule } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';

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

registerLocaleData(localeFr, 'fr')

@NgModule({
  declarations: [
    AppComponent,
    FirstCpmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation : false }
    ),
    BrowserAnimationsModule
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
