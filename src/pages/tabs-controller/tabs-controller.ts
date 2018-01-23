import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClassPage } from '../class/class';
import { EnglishModulesPage } from '../english-modules/english-modules';
import { SetupTabDefaultPagePage } from '../setup-tab-default-page/setup-tab-default-page';
import { MarksTabPage } from '../marks-tab/marks-tab';
import { ReportsTabDefaultPagePage } from '../reports-tab-default-page/reports-tab-default-page';
import { AdminDefaultPagePage } from '../admin-default-page/admin-default-page';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = SetupTabDefaultPagePage;
  tab2Root: any = MarksTabPage;
  tab3Root: any = ReportsTabDefaultPagePage;
  tab4Root: any = AdminDefaultPagePage;
  constructor(public navCtrl: NavController) {
  }
  goToMarksTab(params){
    if (!params) params = {};
    this.navCtrl.push(MarksTabPage);
  }goToClass(params){
    if (!params) params = {};
    this.navCtrl.push(ClassPage);
  }goToEnglishModules(params){
    if (!params) params = {};
    this.navCtrl.push(EnglishModulesPage);
  }
}
