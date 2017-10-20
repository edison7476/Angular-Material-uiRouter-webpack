import DialogServiceModule from './dialogService'
import DialogServiceController from './dialogService.controller';
import DialogServiceComponent from './dialogService.component';
import DialogServiceTemplate from './dialogService.html';

describe('DialogService', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DialogServiceModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DialogServiceController();
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
      expect(DialogServiceTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DialogServiceComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DialogServiceTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DialogServiceController);
      });
  });
});
