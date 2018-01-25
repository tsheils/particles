import {Vector} from '../models/vector';
import {Particle} from '../models/particle';

export class Emitter {
  position: Vector;
  velocity: Vector;
  spread: number;

  constructor(point: Vector, velocity: Vector, spread?: number) {
    this.position = point; // Vector
    this.velocity = velocity; // Vector
    this.spread = spread || Math.PI / 32; // possible angles = velocity +/- spread
  }

  emitParticle(): Particle {
    // Use an angle randomized over the spread so we have more of a "spray"
    const angle = Math.abs(this.velocity.getAngle() + this.spread - (Math.random() * this.spread * 2));

    // The magnitude of the emitter's velocity
    const magnitude = this.velocity.getMagnitude();

    // The emitter's position
    const position = new Vector(this.position.x, this.position.y);

    // New velocity based off of the calculated angle and magnitude
    const velocity = new Vector(0,0, angle, magnitude);

    // return our new Particle!
    return new Particle(position, velocity);
  };

}
