import FoodListModule from './food-list.module'
import FoodListController from './food-list.controller';
import FoodListComponent from './food-list.component';
import FoodListTemplate from './food-list.html';

describe('Food-list', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FoodListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FoodListController();
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
      expect(FoodListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FoodListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FoodListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FoodListController);
      });
  });
});
