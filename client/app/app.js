import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';
import Highcharts from 'highcharts/highstock';
import HighchartsMap from 'highcharts/modules/map';
import uiRouter from '@uirouter/angularjs';

import AppComponent from './app.component';
import Components from './components/components.module';
import Commons from './common/common.module';
import Core from './core/core.module';

import 'angular-material/angular-material.css';
import 'normalize.css';

// For Highcharts
HighchartsMap(Highcharts);// Load Highmaps as a module
window.Highcharts = Highcharts; //attach Highcharts to global scope

angular.module('app', [
    angularMaterial,
    angularAnimate,
    uiRouter,

    Components,
    Commons,
    Core,
  ])
  .config(($locationProvider) => {
    "ngInject";
    
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .component('app', AppComponent);
