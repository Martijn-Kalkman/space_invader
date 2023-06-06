import { Actor, Vector, CollisionType, Shape, Color } from 'excalibur';
import { Resources } from './resources.js';
import { Projectile } from './projectile.js';

export class SpaceShip extends Actor {

  constructor() {
    super({
      collisionType: CollisionType.Active,
      collider: Shape.Box(100, 40),
    });

    // Het plaatsen van de speler
    this.graphics.use(Resources.player.toSprite());
    this.pos = new Vector(
      window.innerWidth - 100,
      window.innerHeight - 100
    );
  }

  // Het spawnen van kogels
  shootProjectile() {
      const projectile = new Projectile(this.pos.clone());
      this.scene.add(projectile);
    }
    
  }