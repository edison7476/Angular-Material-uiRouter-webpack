class TicTacToeController {
  constructor($mdDialog, dialogService) {
    'ngInject';

    this.name = 'ticTacToe';
    this.$mdDialog = $mdDialog;
    this.dialogService = dialogService;
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
      // check 123, 147.
      if (this.tiles[1] === this.tiles[2] && this.tiles[2] === this.tiles[3] ||
          this.tiles[1] === this.tiles[4] && this.tiles[4] === this.tiles[7]) {
            this.showWinner(this.tiles[1]);
      }
    } 
    if (this.tiles[5]) {
      // check 258, 456, 159, 357.
      if (this.tiles[3] === this.tiles[5] && this.tiles[5] === this.tiles[7] ||
          this.tiles[4] === this.tiles[5] && this.tiles[5] === this.tiles[6] ||
          this.tiles[2] === this.tiles[5] && this.tiles[5] === this.tiles[8] ||
          this.tiles[1] === this.tiles[5] && this.tiles[5] === this.tiles[9]) {
            this.showWinner(this.tiles[5]);
      }
    } 
    if (this.tiles[9]) {
      // check 369, 789.
      if (this.tiles[3] === this.tiles[6] && this.tiles[6] === this.tiles[9] ||
          this.tiles[7] === this.tiles[8] && this.tiles[8] === this.tiles[9]) {
            this.showWinner(this.tiles[9]);
      }
    }
  }

  showAlert() {
    this.dialogService
      .showDialog(
        'Attention',
        'This tile has been selected. Please select onther tiles.',
        'OK'
      );
  }

  showWinner(player) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    this.dialogService
      .confirm(
        'Game Over',
        `The Winner is ${player}`,
        'Reset')
      .then(() => {
        this.init();
      });
  };
}

export default TicTacToeController;
