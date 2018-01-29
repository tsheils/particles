import {RainVector, SnowVector, Vector} from '../models/vector';
import {Particle} from '../models/particle';

// boilerplate parameters for an emitter- extended for different particl types
export abstract class Emitter {
  position: Vector;
  velocity: Vector;
  spread: number;

  constructor(point: Vector, velocity: Vector, spread?: number) {
    this.position = point; // Vector
    this.velocity = velocity; // Vector
    this.spread = spread || Math.PI / 32; // possible angles = velocity +/- spread
  }
  // will be expanded for each type of particle
  abstract emitParticle(): Particle;
}

export class SnowEmitter extends Emitter {
  constructor(point: Vector) {
    super(point, new SnowVector(0, 0, -20, 1), 5);
  }

  emitParticle(): Particle {
    // Use an angle randomized over the spread so we have more of a 'spray'
    const angle = Math.abs(this.velocity.getAngle() + this.spread - (Math.random() * this.spread * 2));

    // The magnitude of the emitter's velocity
    const magnitude = this.velocity.getMagnitude();

    // The emitter's position -- creates a SnowVector which has slightly differnt behavior
    const position = new SnowVector(this.position.x, this.position.y);

    // New velocity based off of the calculated angle and magnitude
    const velocity = new SnowVector(0, 0, angle, magnitude);

     const particle = new Particle(position, velocity);
    particle.color = '#FFFFFF';
    // return our new Particle!
    return particle;
  }

}

export class RainEmitter extends Emitter {
  constructor(point: Vector) {
    super(point, new RainVector(0,  0, -90, 5), 1);
  }

  emitParticle(): Particle {
    const angle = Math.abs(this.velocity.getAngle() + this.spread - (Math.random() * this.spread * 2));

    // The magnitude of the emitter's velocity
    const magnitude = this.velocity.getMagnitude();

    // The emitter's position
    const position = new RainVector(this.position.x, this.position.y);

    // New velocity based off of the calculated angle and magnitude
    const velocity = new RainVector(0, 0, angle, magnitude);

    const particle = new Particle(position, velocity);
    particle.color = '#0000ff';
    return particle;
  }
}
