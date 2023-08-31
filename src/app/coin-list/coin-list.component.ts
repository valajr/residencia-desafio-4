import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent {
  public symbols: string[] | undefined;

  constructor() {
    this.fetchCoin().then(res => {
      this.symbols = res;
    })
  }
  fetchCoin = async () => {
    const APIResponse = await fetch("https://api.exchangerate.host/symbols");
    const data = await APIResponse.json();

    return data.symbols;
  }
}