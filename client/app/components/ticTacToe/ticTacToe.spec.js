import TicTacToeModule from './ticTacToe'
import TicTacToeController from './ticTacToe.controller';
import TicTacToeComponent from './ticTacToe.component';
import TicTacToeTemplate from './ticTacToe.html';

describe('TicTacToe', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TicTacToeModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TicTacToeController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(TicTacToeTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TicTacToeComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TicTacToeTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TicTacToeController);
      });
  });
});
