import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { NewTaskModalPage } from '../new-task-modal/new-task-modal';
import { DetailsPage } from '../details/details';
import { LoginPage } from '../login/login';
import { QgeneratePage } from '../qgenerate/qgenerate';
import { QrscanPage } from '../qrscan/qrscan';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})

export class MenuPage {
  idd: any;
  items: Array<any>;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private authService: AuthService,
    private firebaseService: FirebaseService,
    private photoViewer: PhotoViewer
  ) {
    this.idd=firebase.auth().currentUser.uid;
  }

  ionViewWillEnter(){
    this.getData();
  }

  getData(){
    this.firebaseService.getTasks()
    .then(tasks => {
      this.items = tasks;
    })
  }

  gen(){
    this.navCtrl.push(QgeneratePage, {
      uid: this.idd
    })
  }

  scan(){
    this.navCtrl.push(QrscanPage)
  }
  viewDetails(id, item){
    // debugger
    let data = {
      name: item.name,
      phoneno : item.phoneno,
      hospitalname: item.hospitalname,
      diseases: item.diseases,
      docname: item.docname,
      image: item.image,
      id: id
    }
    this.navCtrl.push(DetailsPage, {
      data: data
    })
  }

  showimage(image){
    event.stopPropagation();
    this.photoViewer.show(image);

  }
  openNewUserModal(){
    let modal = this.modalCtrl.create(NewTaskModalPage);
    modal.onDidDismiss(data => {
      this.getData();
    });
    modal.present();
  }

  logout(){
    this.authService.doLogout()
    .then(res => {
      this.navCtrl.push(LoginPage);
    })
  }

}
