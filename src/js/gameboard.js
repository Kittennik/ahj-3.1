import Game from './game';

export default class GameBoard {
  constructor() {
    this.game = new Game();
    this.start = null;
  }

  drawBoard(boardSize) {
    if (typeof document !== 'undefined') {
      const board = document.getElementById('board-container');
      for (let i = 0; i < boardSize; i += 1) {
        const itemBoard = document.createElement('div');
        itemBoard.className = 'field';
        itemBoard.id = `field${i}`;
        board.appendChild(itemBoard);
      }
      this.start = setInterval(() => {
        this.changeCell(boardSize);
      }, 1000);
    }
  }

  changeCell(boardSize) {
    if (typeof document !== 'undefined') {
      const imgPosition = Math.floor(Math.random() * boardSize);
      const imgField = document.getElementById(`field${imgPosition}`);
      const clear = document.querySelector('img.goblin');
      if (clear) clear.parentNode.innerHTML = '';
      imgField.innerHTML = '<img class="goblin" src="goblin.png">';
      const goblin = document.querySelector('img.goblin');
      this.game.hit(goblin);
      if (this.game.checkWin()) this.stop();
    }
  }

  stop() {
    clearInterval(this.start);
  }
}
