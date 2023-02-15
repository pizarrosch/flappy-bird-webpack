class Bird {
  moveBird;
  birdFrame;
  birdSize = [51, 36];
  index = 0;
  gravity = 3;
  birdSource = null;
  angle = 0;

  constructor(canvas, background, column) {
    this.canvas = canvas;
    this.background = background;
    this.column = column;

    this.birdY = this.canvas.getHeight() / 2;

    window.onkeydown = (e) => {
      if (e.key === 'ArrowUp') {
        this.birdY -= column.gap / 2;
        // wingFlapSound.play();
      }
    }

    // this.canvas.onclick = () => {
    //   bird.birdY -= background.gap / 2;
    // }
  }

  render() {
    this.index += 0.6;

    this.birdDirection = (this.index * this.gravity) % this.canvas.getHeight();

    function convertToRadians(degree) {
      return degree*(Math.PI/180);
    }

    const incrementAngle = () => {
      for (let i = 0; i < 90; i++) {
        this.angle += i;
      }
    }

    this.birdSource = {
      x: 432,
      y: Math.floor((this.index % 9) / 3) * this.birdSize[1],
      width: this.birdSize[0],
      height: this.birdSize[1]
    }

    this.moveBird = {
      x: this.canvas.getWidth() / 2 - this.birdSize[0] / 2,
      // y: bird.birdDirection + canvas.getHeight() / 2,
      y: this.birdY,
      width: this.birdSize[0],
      height: this.birdSize[1]
    }

  // ctx.save()
  //   ctx.translate(bird.moveBird.x, bird.birdY - 300)
  //
  //   ctx.rotate(convertToRadians(bird.angle += 0.5));

    this.canvas.getContext().drawImage(
      image,
      this.birdSource.x,
      this.birdSource.y,
      this.birdSource.width,
      this.birdSource.height,
      this.moveBird.x,
      this.moveBird.y,
      this.moveBird.width,
      this.moveBird.height
    )

    // ctx.restore();
    // let angle = Math.min(Math.max((bird.birdY /10), -90), 90) * Math.PI / 180;

    this.birdY += this.gravity;

    if (((this.moveBird.x + this.birdSize[0] / 2 >= this.column.pipeSouthImage.x - 20 &&
          this.moveBird.y + (this.birdSize[1] / 2) >= this.column.pipeSouthImage.y - 20) ||
        (this.moveBird.x - (this.birdSize[0] / 2) === this.column.pipeSouthImage.x + this.column.pipeSouthSource.width &&
          this.moveBird.y + (this.birdSize[1]) >= this.column.pipeSouthImage.y - 20)) ||
      (this.moveBird.y + (this.birdSize[1] / 2) <= this.column.pipeNorthImage.y + (this.column.pipeNorthImage.height - 10) &&
        this.moveBird.x + (this.birdSize[0] / 2) >= this.column.pipeNorthImage.x - 20
      ) ||
      this.moveBird.y + this.birdSize[1] >= this.canvas.getHeight()) {
      this.die();
    }

    if (this.moveBird.y + this.birdSize[1] >= this.canvas.getHeight()) {
      // dieSound.play();
    }

    if (this.moveBird.x + this.birdSize[0] / 2 === this.column.pipeSouthImage.x + this.column.pipeSouthImage.width / 2 + 0.5 &&
      this.moveBird.y + (this.birdSize[1] / 2) < this.column.pipeSouthImage.y - 20) {
      counter.updateScore();
      // pointSound.play();
    }
  }

  die() {
    this.gameOver();
      counter.getBestScore();
      counter.showTable();
      restartButton.style.display = 'block';
      endGameButton.style.display = 'block';
      // hitSound.play();
      cancelAnimationFrame(this.background.frame);
  }

  gameOver() {
    this.canvas.getContext().drawImage(
      image2,
      193,
      228,
      187,
      36,
      this.canvas.getWidth() / 2 - 87,
      288,
      187,
      36
    )
  }
}

export default Bird;
