import { AdminPage } from './../pages/admin/admin';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { CompletePage } from './../pages/complete/complete';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MenuPage } from '../pages/menu/menu';
import { QgeneratePage } from '../pages/qgenerate/qgenerate';
import { QrscanPage } from '../pages/qrscan/qrscan';
import { FetchPage } from '../pages/fetch/fetch';
import { DetailsPage } from '../pages/details/details';
import { DetailPage } from '../pages/detail/detail';
import { NewTaskModalPage } from '../pages/new-task-modal/new-task-modal';
import { Component } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker';

import { FirebaseService } from '../pages/services/firebase.service';
import { AuthService } from '../pages/services/auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environment/environment';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    MenuPage,
    NewTaskModalPage,
    QgeneratePage,
    QrscanPage,
    FetchPage,
    DetailPage,
    DetailsPage,
    AdminPage,
    CompletePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxQRCodeModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    QrscanPage,
    MenuPage,
    NewTaskModalPage,
    FetchPage,
    QgeneratePage,
    DetailPage,
    DetailsPage,
    AdminPage,
    CompletePage,
  ],
  providers: [
    StatusBar,
    PhotoViewer,
    SplashScreen,
    ImagePicker,
    FirebaseService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
