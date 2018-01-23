import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {EnglishModulesPage} from "../english-modules/english-modules";

@Component({
  selector: 'page-class',
  templateUrl: 'class.html'
})
export class ClassPage {

  constructor(public navCtrl: NavController) {
  }
  goToEnglishModules(params) {
    if (!params) params = {};
    this.navCtrl.push(EnglishModulesPage);
  }
}
