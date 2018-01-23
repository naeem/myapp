import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TermsPage } from '../terms/terms';
import { SubjectsPage } from '../subjects/subjects';
import { MathModulesPage } from '../math-modules/math-modules';
import { LifeskillModulesPage } from '../lifeskill-modules/lifeskill-modules';
import { EnglishModules2Page } from '../english-modules2/english-modules2';

@Component({
  selector: 'page-setup-tab-default-page',
  templateUrl: 'setup-tab-default-page.html'
})
export class SetupTabDefaultPagePage {

  constructor(public navCtrl: NavController) {
  }
  goToTerms(params){
    if (!params) params = {};
    this.navCtrl.push(TermsPage);
  }goToSubjects(params){
    if (!params) params = {};
    this.navCtrl.push(SubjectsPage);
  }goToMathModules(params){
    if (!params) params = {};
    this.navCtrl.push(MathModulesPage);
  }goToLifeskillModules(params){
    if (!params) params = {};
    this.navCtrl.push(LifeskillModulesPage);
  }goToEnglishModules2(params){
    if (!params) params = {};
    this.navCtrl.push(EnglishModules2Page);
  }
}
