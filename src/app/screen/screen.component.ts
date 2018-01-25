import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {OptionsService} from "../services/options.service";
import {Particle} from '../models/particle';
import {Vector} from '../models/vector';
import {Emitter} from '../models/emitter';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  @ViewChild('particleEngineTarget') particleContainer: ElementRef;
  maxParticles = 20;
  particleSize = 1;
  emissionRate = 20;
  objectSize = 3; // drawSize of emitter/field
  particles: Particle[] = [];
  midX: number;
  midY: number;
  emitters:Emitter[] = [];
  canvas: any;
  ctx:any;

  constructor(public optionsService: OptionsService,
              private zone: NgZone) { }


  ngOnInit() {
    this.canvas = this.particleContainer.nativeElement;
    this.ctx = this.canvas.getContext('2d');
     this.midX = this.canvas.width / 2;
      this.midY = this.canvas.height / 2;

    for(let i = 0; i < this.canvas.width; i++){
      this.emitters.push(new Emitter(new Vector(i, 0), new Vector(0, 0, -20, 1), 5));
    }

    // Add one emitter located at `{ x : 100, y : 230}` from the origin (top left)
// that emits at a velocity of `2` shooting out from the right (angle `0`)
/*    this.emitters = [
      new Emitter(new Vector(Math.floor(Math.random() * (this.canvas.width - 0 + 1)) + 0, 0), new Vector(0, 0, -20, 1), 5),
      new Emitter(new Vector(Math.floor(Math.random() * (this.canvas.width - 0 + 1)) + 0, 0), new Vector(0, 0, 0, 1.5), 50),
      new Emitter(new Vector(Math.floor(Math.random() * (this.canvas.width - 0 + 1)) + 0, 0), new Vector(0, 0, 0, 2), 50),
      new Emitter(new Vector(Math.floor(Math.random() * (this.canvas.width - 0 + 1)) + 0, 0), new Vector(0, 0, 0, 1), 50),
      new Emitter(new Vector(Math.floor(Math.random() * (this.canvas.width - 0 + 1)) + 0, 0), new Vector(0, 0, 0, 2), 50),
    ];*/

    this.optionsService.updateOptions.subscribe(opts => {
      console.log(opts);
    });

      this.loop();
  }

  addNewParticles():void {
    // if we're at our max, stop emitting.
    if (this.particles.length > this.maxParticles){
      this.particles.splice(0,1)
    }

    // TODO change this to random emission
      // emit [emissionRate] particles and store them in our particles array
      for (let j = 0; j < this.emissionRate; j++) {
        this.particles.push(this.emitters[Math.floor(Math.random() * this.emitters.length)].emitParticle());
      }
  }

  plotParticles(boundsX: number, boundsY: number) {
    // a new array to hold particles within our bounds
    const currentParticles = [];

    for (let particle of this.particles) {
      const pos = particle.position;
      // If we're out of bounds, drop this particle and move on to the next
      if (pos.x < 0 || pos.x > boundsX || pos.y < 0 || pos.y > boundsY) continue;

      // Move our particles
      particle.move();

      // Add this particle to the list of current particles
      currentParticles.push(particle);
    }
    // Update our global particles reference
    this.particles = currentParticles;
  }

   drawParticles(): void {
    this.ctx.fillStyle = 'rgb(255,255,255)';
    for (let particle of this.particles) {
      const position = particle.position;
      this.ctx.fillRect(position.x, position.y, this.particleSize, this.particleSize);
    }
  }

  clear(): void {
    this.ctx.clearRect(0, 0,  this.canvas.width,  this.canvas.height);
  }

   update(): void {
    this.addNewParticles();
    this.plotParticles(this.canvas.width, this.canvas.height);
  }

   draw(): void {
    this.drawParticles();
  }

   queue(): void {
     // premature optimization based on : https://blog.thoughtram.io/angular/2017/02/21/using-zones-in-angular-for-better-performance.html
     this.zone.runOutsideAngular(() => {
       window.requestAnimationFrame(() => this.loop())
     });
  }

  loop(): void {
    this.clear();
    this.update();
    this.draw();
    this.queue();
  }

}
