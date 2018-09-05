import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  result: object;

  constructor(public _http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getCoins() {

    return this._http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD")
      .map(result => this.result = result);

  }

}
