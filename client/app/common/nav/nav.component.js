import template from './nav.html';
import controller from './nav.controller';
import './nav.scss';

let navComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm',
};

export default navComponent;
