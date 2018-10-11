import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormNotePage } from './form-note';

@NgModule({
  declarations: [
    FormNotePage,
  ],
  imports: [
    IonicPageModule.forChild(FormNotePage),
  ],
})
export class FormNotePageModule {}
