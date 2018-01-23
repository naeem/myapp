import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClassesPage } from '../classes/classes';

@Component({
  selector: 'page-terms2',
  templateUrl: 'terms2.html'
})
export class Terms2Page {

  constructor(public navCtrl: NavController) {
  }
  goToClasses(params){
    if (!params) params = {};
    this.navCtrl.push(ClassesPage);
  }
}
