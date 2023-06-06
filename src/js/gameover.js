import { Label, Scene, Color } from 'excalibur';

export class GameOverScene extends Scene {
  constructor(game) {
    super();
    this.game = game;
  }

    // Label voor het game over scherm
  onActivate() {
    const gameoverlabel = new Label({
      x: 200,
      y: 200,
      text: 'Game over',
      color: Color.White,
    });

    this.add(gameoverlabel);
  }
}
