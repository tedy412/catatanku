import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PageDetailsPage  } from '../page-details/page-details';
import { FormNotePage  } from '../form-note/form-note';
/**
 * Generated class for the PageNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-note',
  templateUrl: 'page-note.html',
})
export class PageNotePage {

	 pageDetailsTab = PageDetailsPage;
     formNoteTab = FormNotePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageNotePage');
  }

}
