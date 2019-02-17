import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QgeneratePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-qgenerate',
  templateUrl: 'qgenerate.html',
})
export class QgeneratePage {

  createdCode: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.createdCode=this.navParams.get('uid');
  }

  ionViewDidLoad() {
  }

}
