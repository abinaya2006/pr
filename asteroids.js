class emojiPos {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
  }
  display() {
    push()
    textSize(this.diameter * 2)
    fill(0, 0, 0, 0)
    text(sticker, this.x, this.y)
    pop()
    if (this.y > 800) {
      this.y = this.y - 800
    }
    this.y = this.y + 3
  }
}