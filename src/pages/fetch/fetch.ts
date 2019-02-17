import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import { FirebaseService } from '../services/firebase.service';
import { DetailPage } from '../detail/detail';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import 'firebase/storage';
import { MenuPage } from '../menu/menu';


@Component({
  selector: 'page-fetch',
  templateUrl: 'fetch.html',
})
export class FetchPage {
 items: Array<any>;
  qid:any;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private firebaseService: FirebaseService,
    public navParams: NavParams,
    private photoViewer: PhotoViewer
  ) {
    this.qid=this.navParams.get('uid');
  }

  ionViewWillEnter(){
    this.getData();
  }

  getData(){
    this.firebaseService.gett(this.qid)
    .then(tasks => {
      this.items = tasks;
    })
  }
  back(){
    this.navCtrl.push(MenuPage,)
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
    this.navCtrl.push(DetailPage, {
      data: data
    })
  }

  

  showimage(image){
    event.stopPropagation();
    this.photoViewer.show(image);

  }
}
