import {Vector} from '../models/vector';

/* this is the object that is actually drawn in the canvas. The position is the x,y coordinates, the other values are
    adjusted and returned
*/
export class Particle {
  position: Vector;
  velocity: Vector;
  acceleration: Vector;
  color: string;

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
