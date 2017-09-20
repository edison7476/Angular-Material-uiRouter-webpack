import angular from 'angular';
import dopplerEffect from './doppler-effect/doppler-effect.module';
import foodList from './food-list/food-list.module'
import ticTacToe from './ticTacToe/ticTacToe.moduel';

let componentModule = angular.module('app.components', [
  dopplerEffect,
  foodList,
  ticTacToe,
])
.name;

export default componentModule;
