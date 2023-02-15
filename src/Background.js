class Background {
  frame;
  speed = 4;
  index = 0;
  
  constructor(canvas) {
    this.canvas = canvas;
  }

  render() {
    this.index += 0.3;
    const backgroundDirection = -((this.index * this.speed) % this.canvas.width);

    const bgSource = {
      x: 0,
      y: 0,
      width: this.canvas.width,
      height: this.canvas.height
    }

    const bgMovePartOne = {
      x: backgroundDirection + this.canvas.width,
      y: 0,
      width: this.canvas.width,
      height: this.canvas.height
    }

    const bgMovePartTwo = {
      x: backgroundDirection,
      y: 0,
      width: this.canvas.width,
      height: this.canvas.height
    }

    ctx.drawImage(
      image,
      bgSource.x,
      bgSource.y,
      bgSource.width,
      bgSource.height,
      bgMovePartOne.x,
      bgMovePartOne.y,
      bgMovePartOne.width,
      bgMovePartOne.height
    )

    ctx.drawImage(
      image,
      bgSource.x,
      bgSource.y,
      bgSource.width,
      bgSource.height,
      bgMovePartTwo.x,
      bgMovePartTwo.y,
      bgMovePartTwo.width,
      bgMovePartTwo.height
    )
     requestAnimationFrame(this.render);
  }

  start() {
    this.frame = requestAnimationFrame(this.start);
    column.render();
    bird.render()
  }
}

export default Background;
