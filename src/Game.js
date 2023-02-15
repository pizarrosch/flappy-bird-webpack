import Background from "./Background";
import Bird from './Bird';
import Counter from './Counter';
import Column from './Column';
import Canvas from "./Canvas";

class Game {
  start() {
    const canvas = new Canvas('game-canvas');

    const bg = new Background(canvas);
    const bird = new Bird(canvas, bg);
    const column = new Column(canvas, bird);
    const counter = new Counter();
    bg.render();

    startButton.onclick = () => {
      bg.start()
      startButton.style.display = 'none';
    }

    restartButton.onclick = () => {
      location.reload();
      bg.start()
      startButton.classList.add('invisible');

      requestAnimationFrame(bg.start)

      restartButton.style.display = 'none';
      endGameButton.style.display = 'none';
    };

    endGameButton.onclick = () => {
      location.reload();
      counter.reset();
      restartButton.style.display = 'none';
      endGameButton.style.display = 'none';
    };

    window.onload = () => {
      counter.getBestScore();
    }
  }
}

export default Game;