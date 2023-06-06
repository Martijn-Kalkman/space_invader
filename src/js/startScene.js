import { Scene, Color, Label, Input } from 'excalibur';

export class StartScene extends Scene {
  constructor(game) {
    super();
    this.game = game;
  }

  onActivate() {
// 3 labels voor het startscherm
    const Titel = new Label({
      x: window.innerWidth - 600,
      y: window.innerHeight - 800,
      text: 'Space invaders',
      color: Color.White,
    });
    this.add(Titel);


    const instructionsLabel = new Label({
        x: window.innerWidth - 600,
        y: window.innerHeight - 700,
      text: 'Gebruik A en D om te bewegen, en W om te schieten',
      color: Color.White,
    });
    this.add(instructionsLabel);


    const controls = new Label({
        x: window.innerWidth - 600,
        y: window.innerHeight - 600,
        text: 'Klik op spatie om te beginen',
        color: Color.White,
      });
      this.add(controls);

    // Als je op spatie klikt ga je door naar de mainscene
    this.game.input.keyboard.on('press', (evt) => {
      if (evt.key === Input.Keys.Space) {
        this.game.startMainScene();
      }
    });
  }
}