import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MathModulesPage } from '../math-modules/math-modules';
import { SubjectsPage } from '../subjects/subjects';
import { LifeskillModulesPage } from '../lifeskill-modules/lifeskill-modules';
import { EnglishModules2Page } from '../english-modules2/english-modules2';

@Component({
  selector: 'page-add-module',
  templateUrl: 'add-module.html'
})
export class AddModulePage {

  constructor(public navCtrl: NavController) {
  }
  goToMathModules(params){
    if (!params) params = {};
    this.navCtrl.push(MathModulesPage);
  }goToSubjects(params){
    if (!params) params = {};
    this.navCtrl.push(SubjectsPage);
  }goToLifeskillModules(params){
    if (!params) params = {};
    this.navCtrl.push(LifeskillModulesPage);
  }goToEnglishModules2(params){
    if (!params) params = {};
    this.navCtrl.push(EnglishModules2Page);
  }
}
