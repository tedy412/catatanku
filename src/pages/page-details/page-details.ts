import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PageDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-details',
  templateUrl: 'page-details.html',
})
export class PageDetailsPage {

	public buah:any;
	public sayur:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.buah  = ['apel', 'mangga', 'tomat'];
  	this.sayur  = ['kubis', 'kentang', 'wortel'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageDetailsPage');
  }

}
