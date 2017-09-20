import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ticTacToeComponent from './ticTacToe.component';

let ticTacToeModule = angular.module('ticTacToe', [
  uiRouter
])
.component('ticTacToe', ticTacToeComponent)
.name;

export default ticTacToeModule;
