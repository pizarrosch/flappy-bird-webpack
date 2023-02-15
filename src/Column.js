class Column {

  pipeNorthSource;
  pipeSouthSource;
  pipeNorthImage;
  pipeSouthImage
  gap;
  constantGap;
  pipe = [];

  constructor(canvas, bird) {
    this.canvas = canvas;

    this.bird = bird;
    this.pipe[0] = {
      x: this.canvas.width,
      y: -204
    }
  }

  render() {
    for (let i = 0; i < this.pipe.length; i++) {
      this.pipeNorthSource = {
        x: 432,
        y: 110,
        width: 78,
        height: 504
      }

      this.pipeSouthSource = {
        x: 510,
        y: 110,
        width: 80,
        height: 504
      }

      this.pipeNorthImage = {
        x: this.pipe[i].x,
        y: this.pipe[i].y,
        width: this.bird.birdSize[0] * 2,
        height: 580
      }

      this.pipeSouthImage = {
        x: this.pipe[i].x,
        y: this.pipe[i].y + this.constantGap,
        width: this.bird.birdSize[0] * 2,
        height: 580
      }

      this.gap = this.pipeNorthImage.height * 0.25;
      this.constantGap = this.pipeNorthImage.height + this.gap;
      // console.log(background.gap)

      ctx.drawImage(
        image,
        this.pipeNorthSource.x,
        this.pipeNorthSource.y,
        this.pipeNorthSource.width,
        this.pipeNorthSource.height,
        this.pipeNorthImage.x,
        this.pipeNorthImage.y,
        this.pipeNorthImage.width,
        this.pipeNorthImage.height
      )

      ctx.drawImage(
        image,
        this.pipeSouthSource.x,
        this.pipeSouthSource.y,
        this.pipeSouthSource.width,
        this.pipeSouthSource.height,
        this.pipeSouthImage.x,
        this.pipeSouthImage.y,
        this.pipeSouthImage.width,
        this.pipeSouthImage.height
      )

      this.pipe[i].x -= 3;

      if (this.pipe[i].x  === this.canvas.width - (this.pipeNorthImage.width * 3)) {
        this.pipe.push({
          x: this.canvas.width + this.pipeNorthImage.width,
          y: Math.floor(Math.random() * this.pipeNorthSource.height) - this.pipeNorthSource.height
        })
      }
      console.log(this.pipe[i].x)
    }
  }
}

export default Column;