import angular from 'angular';
import dialogService from './dialog-service/dialog-service.module';
import foodService from './food-service/food-service.module';

export default angular.module('app.core', [
    dialogService,
    foodService,
])
.name;

