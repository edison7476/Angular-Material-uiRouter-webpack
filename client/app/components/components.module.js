import angular from 'angular';
import dopplerEffect from './doppler-effect/doppler-effect.module';
import foodList from './food-list/food-list'

let componentModule = angular.module('app.components', [
  dopplerEffect,
  foodList,
])
.name;

export default componentModule;
