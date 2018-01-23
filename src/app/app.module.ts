import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SetupTabDefaultPagePage } from '../pages/setup-tab-default-page/setup-tab-default-page';
import { MarksTabPage } from '../pages/marks-tab/marks-tab';
import { ReportsTabDefaultPagePage } from '../pages/reports-tab-default-page/reports-tab-default-page';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { SubjectsPage } from '../pages/subjects/subjects';
import { TermsPage } from '../pages/terms/terms';
import { MathModulesPage } from '../pages/math-modules/math-modules';
import { EnglishModulesPage } from '../pages/english-modules/english-modules';
import { EnglishModules2Page } from '../pages/english-modules2/english-modules2';
import { LifeskillModulesPage } from '../pages/lifeskill-modules/lifeskill-modules';
import { ResultsPage } from '../pages/results/results';
import { ClassPage } from '../pages/class/class';
import { Terms2Page } from '../pages/terms2/terms2';
import { ClassesPage } from '../pages/classes/classes';
import { AdminDefaultPagePage } from '../pages/admin-default-page/admin-default-page';
import { AddModulePage } from '../pages/add-module/add-module';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NumbersModulesPage} from "../pages/numbers-modules/numbers-modules";

@NgModule({
  declarations: [
    MyApp,
    SetupTabDefaultPagePage,
    MarksTabPage,
    ReportsTabDefaultPagePage,
    TabsControllerPage,
    SubjectsPage,
    TermsPage,
    MathModulesPage,
    EnglishModulesPage,
    EnglishModules2Page,
    LifeskillModulesPage,
    ResultsPage,
    ClassPage,
    Terms2Page,
    ClassesPage,
    AdminDefaultPagePage,
    AddModulePage,
    NumbersModulesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SetupTabDefaultPagePage,
    MarksTabPage,
    ReportsTabDefaultPagePage,
    TabsControllerPage,
    SubjectsPage,
    TermsPage,
    MathModulesPage,
    EnglishModulesPage,
    EnglishModules2Page,
    LifeskillModulesPage,
    ResultsPage,
    ClassPage,
    Terms2Page,
    ClassesPage,
    AdminDefaultPagePage,
    AddModulePage,
    NumbersModulesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
