import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import dialogService from './dialog.service';
import dialogServiceComponent from './dialogService.component';

let dialogServiceModule = angular.module('dialogService', [
  uiRouter
])
.component('dialogService', dialogServiceComponent)
.service('dialogService', dialogService)
.name;

export default dialogServiceModule;
