class TicTacToeController {
  constructor($mdDialog) {
    'ngInject';

    this.name = 'ticTacToe';
    this.$mdDialog = $mdDialog;
  }

  $onInit() {
    this.init();
  }

  init() {
    this.count = 0;
    this.tiles = {
      1: '', 2: '', 3: '',
      4: '', 5: '', 6: '',
      7: '', 8: '', 9: '',
    };
    this.player = 'Blue';
  }

  checkTile(key) {
    this.count++

    if (!this.tiles[key]) {
      this.tiles[key] = this.player;
      this.player = (this.player === 'Blue') ? 'Red' : 'Blue';
    } else {
      this.showAlert();
    }

    if(this.count > 4) {
      this.checkWinner();
    }
  }

  checkWinner() {
    if (this.tiles[1]) {
      // check 123, 147
      if (this.tiles[1] === this.tiles[2] && this.tiles[2] === this.tiles[3] ||
          this.tiles[1] === this.tiles[4] && this.tiles[4] === this.tiles[7]) {
            this.showWinner(this.tiles[1]);
      }
    } 
    if (this.tiles[5]) {
      // check 258, 456, 159, 357
      if (this.tiles[3] === this.tiles[5] && this.tiles[5] === this.tiles[7] ||
          this.tiles[4] === this.tiles[5] && this.tiles[5] === this.tiles[6] ||
          this.tiles[2] === this.tiles[5] && this.tiles[5] === this.tiles[8] ||
          this.tiles[1] === this.tiles[5] && this.tiles[5] === this.tiles[9]) {
            this.showWinner(this.tiles[5]);
      }
    } 
    if (this.tiles[9]) {
      // check 369, 789
      if (this.tiles[3] === this.tiles[6] && this.tiles[6] === this.tiles[9] ||
          this.tiles[7] === this.tiles[8] && this.tiles[8] === this.tiles[9]) {
            this.showWinner(this.tiles[9]);
      }
    }
  }

  showAlert(title, content, btnMessage = 'Ok') {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    const dialogDetail = this.$mdDialog.alert()
      .parent(angular.element(document.body))
      .clickOutsideToClose(true)
      .title('Attention')
      .textContent('This tile has been selected. Please select onther tiles.')
      .ok('OK')
    
      this.$mdDialog.show(dialogDetail);
  };

  showWinner(player) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    const dialogDetail = this.$mdDialog.confirm()
      .parent(angular.element(document.body))
      .clickOutsideToClose(true)
      .title('Game Over')
      .textContent(`The Winner is ${player}`)
      .ok('Reset')

    this.$mdDialog
      .show(dialogDetail)
      .then(() => {
        this.init();
      });
  };
}

export default TicTacToeController;
