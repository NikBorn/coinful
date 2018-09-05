import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coins: Object;
  likedCoins = [];

  constructor(public navCtrl: NavController, private _data: DataProvider, private storage: Storage) {

  }

  ionViewDidLoad() {

  }

  refreshCoins() {
    this.storage.get('likedCoins').then((val) => {

      //if the value is not set, then:
      if (!val) {
        this.likedCoins.push('BTC', 'ETH', 'IOT');
        this.storage.set('likedCoins', this.likedCoins);

        this._data.getCoins(this.likedCoins)
          .subscribe(result => {
            this.coins = result;
          })
      }

      //It is set
      else {
        this.likedCoins = val;

        this._data.getCoins(this.likedCoins)
          .subscribe(result => {
            this.coins = result;
          })

      }

    })
  }

}
