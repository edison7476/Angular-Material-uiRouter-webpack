import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';
import uiRouter from '@uirouter/angularjs';

import AppComponent from './app.component';

import Components from './components/components.module';
import Commons from './common/common.module';
import Core from './core/core.module';
// import './components/components.module';
// import './core/core.module';

import 'angular-material/angular-material.css';
import 'normalize.css';

angular.module('app', [
    angularMaterial,
    angularAnimate,
    uiRouter,
    
    // 'app.components',
    // 'app.core',
    Components,
    Commons,
    Core,
  ])
  .config(($locationProvider) => {
    "ngInject";
    
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .component('app', AppComponent);
