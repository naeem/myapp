import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClassPage } from '../class/class';
import { EnglishModulesPage } from '../english-modules/english-modules';

@Component({
  selector: 'page-marks-tab',
  templateUrl: 'marks-tab.html'
})
export class MarksTabPage {

  constructor(public navCtrl: NavController) {
  }
  goToClass(params){
    if (!params) params = {};
    this.navCtrl.push(ClassPage);
  }goToEnglishModules(params){
    if (!params) params = {};
    this.navCtrl.push(EnglishModulesPage);
  }
}
