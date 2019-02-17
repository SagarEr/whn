import { Component } from '@angular/core';
import { ViewController, ToastController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FirebaseService } from '../services/firebase.service';
import { PhotoViewer } from '@ionic-native/photo-viewer';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  image: any;
  item: any;
  name:string='';
  phoneno:any;
  hospitalname:any;
  diseases:any;
  docname:any;

  loading: any;

  constructor(
    private navParams: NavParams,
    private viewCtrl: ViewController,
    private loadingCtrl: LoadingController,
    private photoViewer: PhotoViewer
  ) {
    this.loading = this.loadingCtrl.create();
    this.getData()

  }

  ionViewWillLoad(){
  }

  getData(){
    this.item = this.navParams.get('data');
    this.image = this.item.image;
    this.name=this.item.name;
    this.phoneno=this.item.phoneno;
    this.hospitalname=this.item.hospitalname;
    this.diseases=this.item.diseases;
    this.docname=this.item.docname;
  }

  dismiss() {
   this.viewCtrl.dismiss();
  }

  showimage(image){
    this.photoViewer.show(image);

  }
 
}

