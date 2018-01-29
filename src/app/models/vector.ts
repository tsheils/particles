
// abstract class wouldn't work because the particle class needs to create an agnostic vector
export class Vector {
x = 0;
y = 0;

  constructor(x: number, y: number, angle?: number, magnitude?: number) {}
// used to pudate the vector
  add(vector: Vector): void {
    this.x += vector.x;
    this.y += vector.y;
  }

  // magnitude controls the speed of descent
  getMagnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  // angle is the angle of descent
  getAngle(): number {
    return Math.atan2(this.y, this.x);
  }
}

export class SnowVector extends Vector {
  constructor(x: number, y: number, angle?: number, magnitude?: number) {
    super(x, y, angle, magnitude);
   // this adds a bit of drift to the particles as they fall
    this.x += magnitude * Math.cos(angle) || x;
    this.y += magnitude * Math.sin(angle) || y;
  }
}

export class RainVector extends Vector {
  constructor(x: number, y: number, angle?: number, magnitude?: number) {
    super(x, y, angle, magnitude);
    // keeping x static means the rain particles fall straight down
    this.x += x;
    this.y += magnitude * Math.sin(angle) || y;
  }
}
