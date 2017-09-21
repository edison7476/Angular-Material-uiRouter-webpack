class FoodListController {
  constructor(foodService) {
    'ngInject';

    this.foodService = foodService;
    this.loadingPage = true;
    this.foodItems;
  }

  $onInit() {
    this.foodService
        .getFood()
        .then((response) => {
            this.loadingPage = false;
            this.foodItems = response.data;
        })
  }
}

export default FoodListController;
