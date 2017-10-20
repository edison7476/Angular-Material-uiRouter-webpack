export default class dialogService {
    constructor($mdDialog) {
        'ngInject';

        this.$mdDialog = $mdDialog;
    }


    showDialog(title, content, btnMsg = 'OK') {
        const dialogDetail = this.$mdDialog.alert()
            .parent(angular.element(document.body))
            .clickOutsideToClose(true)
            .title(title)
            .textContent(content)
            .ok(btnMsg)
      
        this.$mdDialog.show(dialogDetail);
    }

    confirm(title, content, btnMsg = 'OK') {
        const dialogDetail = this.$mdDialog.confirm()
            .parent(angular.element(document.body))
            .clickOutsideToClose(true)
            .title(title)
            .textContent(content)
            .ok(btnMsg)
        // Return promise back so we can use then() to take care of the next step
        return this.$mdDialog.show(dialogDetail);
    }
}