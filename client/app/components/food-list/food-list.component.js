import template from './food-list.html';
import controller from './food-list.controller';
import './food-list.scss';

let foodListComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm',
};

export default foodListComponent;
