import NavModule from './nav'
import NavController from './nav.controller';
import NavComponent from './nav.component';
import NavTemplate from './nav.html';

describe('Nav', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NavModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NavController();
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
      expect(NavTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NavComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NavTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NavController);
      });
  });
});
