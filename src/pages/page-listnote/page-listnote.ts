import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageNotePage } from '../page-note/page-note';

/**
 * Generated class for the PageListnotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-listnote',
  templateUrl: 'page-listnote.html',
})
export class PageListnotePage {
todo = {}
  logForm() {
    console.log(this.todo)
  }
 label_note : String;
  tanggalNote : any;
  public buahArrayObject:any;
  selectedBuah : String;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.buahArrayObject  = [{text : "buah apel",value : "apel"}, 
   {text : "buah mangga",
    value : "mangga"}, 
    {text : "buah pisang",
    value : "pisang"}];
  this.selectedBuah  = "apel";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageListnotePage');
  }

  navTambahPage(){
   let Para = {
   id_note : '1',
   judul_note : 'matematka hari ini',
   isi_note : 'loremipsum dolres set amet'
   }
  this.navCtrl.push(PageNotePage, Para);
  }

  ngOnInit() {
  // menginisiasi isi dari note.
  this.label_note = 'Hello ini note saya';
  this.tanggalNote = new Date().getTime();
   

 }

}
