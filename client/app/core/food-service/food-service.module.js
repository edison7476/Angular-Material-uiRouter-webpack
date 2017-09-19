import angular from 'angular';
import foodService from './food-service';

export default angular.module('app.foodService', [])
.service('foodService', foodService)
.name