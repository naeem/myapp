import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Terms2Page } from '../terms2/terms2';
import { ClassesPage } from '../classes/classes';

@Component({
  selector: 'page-reports-tab-default-page',
  templateUrl: 'reports-tab-default-page.html'
})
export class ReportsTabDefaultPagePage {

  constructor(public navCtrl: NavController) {
  }
  goToTerms2(params){
    if (!params) params = {};
    this.navCtrl.push(Terms2Page);
  }goToClasses(params){
    if (!params) params = {};
    this.navCtrl.push(ClassesPage);
  }
}
