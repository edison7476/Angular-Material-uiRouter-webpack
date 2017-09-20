import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import navComponent from './nav.component';

let navModule = angular.module('nav', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<doppler-effect></doppler-effect>',
    })
    .state('foods', {
      url: '/foods',
      template: '<food-list></food-list>',
    })
    .state('ticTacToe', {
      url: '/tic-tac-toe',
      template: '<tic-tac-toe></tic-tac-toe>',
    })
})
.component('navBar', navComponent)
.name;

export default navModule;
