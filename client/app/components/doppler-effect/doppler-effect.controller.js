export default class dopplerEffectController {
    constructor($scope, foodService) {
        'ngInject';
        
        this.$scope = $scope;
        this.velocity = 0;
        this.multiplier = 1;

        this.foodService = foodService;

        this.$scope.$watch('vm.velocity', (newVal, oldVal) => {
            if (newVal > 100) {
              this.velocity = 100;
            } else if (newVal < -100) {
              this.velocity = -100;
            }
            this.multiplier = (newVal > 0) ? -0.4 : -1.6;
        });
    }

    $onInit() {
        console.log('Hello Doppler Effect', this);
    }
}
