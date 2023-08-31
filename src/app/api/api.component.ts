import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  @Input() values: undefined;
  @Input() symbols: undefined;

  constructor() {
    fetchCoin().then(res => {
      this.values = res;
    })
    fetchCoin().then(res => {
      this.symbols = res;
    })
  }
}

let fetchCoin = async (mode: string = 'latest') => {
  const APIResponse = await fetch("https://api.exchangerate.host/" + mode);
  const data = await APIResponse.json();
  if(mode == 'latest')
    return data.rates;
  else if(mode == 'symbols')
    return data.symbols;
}
