export default class Canvas {
  #canvas;

  constructor(canvasId) {
    this.#canvas = document.getElementById(canvasId);
  }

  getContext() {
    return this.#canvas.getContext('2d')
  }

  getWidth() {
    return this.#canvas.width;
  }

  getHeight() {
    return this.#canvas.height;
  }
}