class FoodListController {
  constructor(foodService) {
    'ngInject';

    this.foodService = foodService;
    this.foodItems;
  }

  $onInit() {
    this.foodService
        .getFood()
        .then((response) => {
            this.foodItems = response.data;
        })
  }
}

export default FoodListController;
