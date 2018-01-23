import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SubjectsPage } from '../subjects/subjects';
import { LifeskillModulesPage } from '../lifeskill-modules/lifeskill-modules';
import { EnglishModules2Page } from '../english-modules2/english-modules2';
import {AddModulePage} from "../add-module/add-module";
import {NumbersModulesPage} from "../numbers-modules/numbers-modules";

@Component({
  selector: 'page-math-modules',
  templateUrl: 'math-modules.html'
})
export class MathModulesPage {

  constructor(public navCtrl: NavController) {
  }
  goToSubjects(params){
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
  }goToAddModule(params){
    if (!params) params = {};
    this.navCtrl.push(AddModulePage);
  }goToNumbersModules(params) {
    if (!params) params = {};
    this.navCtrl.push(NumbersModulesPage);
  }
}
