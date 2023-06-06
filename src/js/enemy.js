import { Actor, CollisionType, Shape, Vector } from 'excalibur';
import { Resources } from './resources.js';

export class alien extends Actor {
  constructor() {
    super({
      collisionType: CollisionType.Passive,
      collider: Shape.Box(60, 40),
    });
    this.graphics.use(Resources.enemy.toSprite());
    this.pos = new Vector(
      Math.random() * (window.innerWidth - 100),
      -100
    );
    this.vel = new Vector(0, 100);
  }

  update(engine, delta) {
    super.update(engine, delta);

    if (this.pos.y > engine.drawHeight) {
      this.kill();
    }
  }
}
