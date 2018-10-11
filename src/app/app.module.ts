import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PageListnotePage } from '../pages/page-listnote/page-listnote';
import { FormNotePage } from '../pages/form-note/form-note';
import { PageNotePage } from '../pages/page-note/page-note';
import { PageDetailsPage } from '../pages/page-details/page-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PageListnotePage,
    FormNotePage,
    PageNotePage,
    PageDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PageListnotePage,
    FormNotePage,
    PageNotePage,
    PageDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

