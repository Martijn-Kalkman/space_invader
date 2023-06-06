import { Actor, Vector, Color, CollisionType } from 'excalibur';

export class Projectile extends Actor {
  constructor(position, color = Color.Black, width = 10, height = 10) {
    super({
      pos: position.clone(),
      width: width,
      height: height,
      color: color,
      collisionType: CollisionType.Passive,
    });
    
    

    // De snelheid van de kogels
    this.vel = new Vector(0, -800); 
  }
  
  

    // Zorg er voor de de kogels niet oneindig door vliegen
  update(engine, delta) {
    super.update(engine, delta);
    if (this.pos.y < -300) {
      this.kill();
    }
  }
}