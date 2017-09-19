import Food-listModule from './food-list'
import Food-listController from './food-list.controller';
import Food-listComponent from './food-list.component';
import Food-listTemplate from './food-list.html';

describe('Food-list', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Food-listModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Food-listController();
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
      expect(Food-listTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Food-listComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Food-listTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Food-listController);
      });
  });
});
