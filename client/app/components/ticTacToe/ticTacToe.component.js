import template from './ticTacToe.html';
import controller from './ticTacToe.controller';
import './ticTacToe.scss';

let ticTacToeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm',
};

export default ticTacToeComponent;
