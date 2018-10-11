import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageNotePage } from './page-note';

@NgModule({
  declarations: [
    PageNotePage,
  ],
  imports: [
    IonicPageModule.forChild(PageNotePage),
  ],
})
export class PageNotePageModule {}
