import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinConvertComponent } from './coin-convert/coin-convert.component';
import { HistoricComponent } from './historic/historic.component';
import { HomeComponent } from './home/home.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinListComponent,
    CoinConvertComponent,
    HistoricComponent,
    HomeComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
