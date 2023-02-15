class Counter {
  constructor(score, bestScore) {
    this.score = score;
    this.bestScore = bestScore;
  }

  render() {
    scoreDiv.innerHTML = `Score:${counter.score}`;
    bestScoreDiv.innerHTML = `Best:${counter.bestScore}`;
  }

  updateScore() {
    this.score += 1;

    if (this.score > this.bestScore) {
      localStorage.setItem('bestScore', `${this.score}`);
    }
    scoreDiv.innerHTML = `Score:${counter.score}`;
  }

  getBestScore() {
    this.bestScore = localStorage.getItem('bestScore');
    bestScoreDiv.innerHTML = `Best:${counter.bestScore}`;
  }

  reset() {
    counter.score = 0;
    localStorage.clear();
    localStorage.setItem('bestScore', `${counter.score}`);
  }

  showTable() {
    scoreTable.style.display = 'flex';
    scoreTableScore.innerHTML = `Score:${counter.score}`;
    scoreTableBestScore.innerHTML = `Best:${counter.bestScore}`;
  }
}

let counter = new Counter(0, 0);
counter.render();