import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClassPage } from '../class/class';

@Component({
  selector: 'page-english-modules',
  templateUrl: 'english-modules.html'
})
export class EnglishModulesPage {

  constructor(public navCtrl: NavController) {
  }
  goToClass(params){
    if (!params) params = {};
    this.navCtrl.push(ClassPage);
  }
}
