import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricComponent } from './historic/historic.component';
import { CoinConvertComponent } from './coin-convert/coin-convert.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'historic', component: HistoricComponent },
  { path: 'convert', component: CoinConvertComponent},
  { path: 'list', component: CoinListComponent},
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }