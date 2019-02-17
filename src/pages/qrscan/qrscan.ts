import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FetchPage } from '../fetch/fetch';

@Component({
  selector: 'page-qrscan',
  templateUrl: 'qrscan.html',
})
export class QrscanPage {

  qid:string='';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
 

  sca(qid){
    this.navCtrl.push(FetchPage, {
      uid: this.qid
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrscanPage');
  }

}
