import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MathModulesPage} from "../math-modules/math-modules";

/**
 * Generated class for the NumbersModulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-numbers-modules',
  templateUrl: 'numbers-modules.html'
})
export class NumbersModulesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToMathModules(params) {
    if (!params) params = {};
    this.navCtrl.push(MathModulesPage);
  }
}
