import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageDetailsPage  } from '../page-details/page-details';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the FormNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-note',
  templateUrl: 'form-note.html',
})
export class FormNotePage {
  public pekerjaanArrayObject:any;
  formRegistrasi : FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams , private fb : FormBuilder) {
      this.pekerjaanArrayObject = [{
    text : 'siswa',
    value : 'siswa'
  }, {
    text : 'karyawan',
    value : 'karyawan'
  }, {
    text : 'swasta',
    value : 'swasta'
  }];
  this.formRegistrasi =  this.fb.group({
      nama : this.fb.control('', Validators.required),
      jenis_kelamin : this.fb.control('', Validators.required),
      pekerjaan : this.fb.control('siswa', Validators.required)
    })

     console.log(navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormNotePage');

  }

onSubmit(value){
    console.log(value);
  }



  navMinPage(){
   // this.navCtrl.pop();
  // this.navCtrl.pop(PageListnotePage);
   console.log(this.navCtrl.parent.parent.pop());
  }

}
