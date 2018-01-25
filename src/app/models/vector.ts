
export class Vector {
x: number = 0;
y: number = 0;

  constructor(x:number, y:number, angle?: number, magnitude?: number) {
    this.x += magnitude * Math.cos(angle) || x;
    this.y += magnitude * Math.sin(angle) || y;
  }

  add(vector: Vector):void {
    this.x += vector.x;
    this.y += vector.y;
  }

  getMagnitude():number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  getAngle():number {
    return Math.atan2(this.y, this.x);
  }
}
