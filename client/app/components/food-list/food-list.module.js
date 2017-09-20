import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import foodListComponent from './food-list.component';

let foodListModule = angular.module('foodList', [
  uiRouter
])
.component('foodList', foodListComponent)
.name;

export default foodListModule;
