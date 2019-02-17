import { CompletePage } from './../complete/complete';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  t="";
  p="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
  
  gotoComplete(){
    if(this.p=="admin" && this.t=="admin"){
      this.navCtrl.push(CompletePage);

    }
    else
    {
      this.p="";
      this.t="";
      
    }

  }
}
