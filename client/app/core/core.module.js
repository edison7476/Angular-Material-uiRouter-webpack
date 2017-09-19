import angular from 'angular';
import foodService from './food-service/food-service.module';

export default angular.module('app.core', [
    foodService,
])
.name;

