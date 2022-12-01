// import { HttpClienModule } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/services/in-memory-data.service';
// import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { FirstCpmComponent } from './first-cpm/first-cpm.component';

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
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
