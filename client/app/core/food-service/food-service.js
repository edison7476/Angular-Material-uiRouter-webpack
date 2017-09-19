export default class foodService {
    constructor($http) {
        'ngInject';

        this.$http = $http;
    }

    getFood() {
        const url = 'https://davids-restaurant.herokuapp.com/categories.json';
        return this.$http ({
            method: 'GET',
            url,
        })
    }
}