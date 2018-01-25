import {Vector} from '../models/vector';

export class Particle {
  position : Vector;
  velocity : Vector;
  acceleration : Vector;

  constructor(point: Vector, velocity: Vector, acceleration?: Vector) {
    this.position = point || new Vector(0, 0);
    this.velocity = velocity || new Vector(0, 0);
    this.acceleration = acceleration || new Vector(0, 0);
  }

  move(): void {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  }
}
