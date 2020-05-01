export default class Game {
  constructor() {
    this.points = 0;
    this.miss = 0;
  }

  hit(goblin) {
    const miss = setTimeout(() => {
      this.miss += 1;
      this.stats();
    }, 1000);
    goblin.addEventListener('click', () => {
      goblin.parentNode.innerHTML = '';
      this.points += 1;
      clearTimeout(miss);
      this.stats();
    });
  }

  stats() {
    if (typeof document !== 'undefined') {
      const miss = document.getElementById('miss');
      const points = document.getElementById('points');
      if (miss !== null) miss.textContent = this.miss;
      if (points !== null) points.textContent = this.points;
    }
  }

  checkWin() {
    if (typeof document !== 'undefined') {
      if (this.miss >= 5) {
        document.getElementById('stat').textContent = `Игра закончена. Вы набрали ${this.points} очков!`;
        return true;
      }
      return false;
    }
  }
}
