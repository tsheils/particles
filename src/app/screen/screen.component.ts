import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {ParticleTypeService} from '../services/particle-type.service';
import {Particle} from '../models/particle';
import {RainVector, SnowVector, Vector} from '../models/vector';
import {Emitter, RainEmitter, SnowEmitter} from '../models/emitter';
import {AnimationToggleService} from '../services/animation-toggle.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})

/*
* Most of this was adapted from: https://software.intel.com/en-us/html5/hub/blogs/build-a-javascript-particle-system-in-200-lines
* I created typescript classes for vector, particle and emitter, and changed the parameters
* Also converted the js syntax to typescript
* */
export class ScreenComponent implements OnInit {
  // container that holds the canvas
  @ViewChild('particleEngineTarget') particleContainer: ElementRef;

  // these 3 values could also be extracted as variables to allow the user to control the density, size and rate
  maxParticles = 200;
  particleSize = 2;
  emissionRate = 20;

  // holds the currently drawn particles
  particles: Particle[] = [];
  // holds the emitters that are scattered across the top of the canvas
  emitters: Emitter[] = [];

  // canvas elements for drawing
  canvas: any;
  ctx: any;

  frame: number; // timestamp to stop the animation

  constructor(private particleTypeService: ParticleTypeService,
              private animationToggleService: AnimationToggleService,
              private zone: NgZone) { }


  ngOnInit(): void {
    // get drawing elements
    this.canvas = this.particleContainer.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    // subscribe to the particle service that allows the users to change the particle type
    this.particleTypeService.particletype$.subscribe(res => {
      // clean up existing screen -- the animation is never stopped, but the particles and emitters are emptied
      this.clear();
      this.emitters = [];
      switch (res) {
        case 'rain': {
          // fill with rain emitters
          for (let i = 0; i < this.canvas.width; i++) {
            this.emitters.push(new RainEmitter(new RainVector(i, 0)));
          }
          // restart animation if paused
          if (this.frame === null) {
              this.animationToggleService.toggleAnimation();
          }
          break;
        }
        case 'snow': {
          // fill with snow emitters
          for (let i = 0; i < this.canvas.width; i++) {
            this.emitters.push(new SnowEmitter(new SnowVector(i, 0)));
          }
          // restart animation if paused
          if (this.frame === null) {
            this.animationToggleService.toggleAnimation();
          }
          break;
        }
      }
      this.particles = [];
    });

    /* subscribe to play/pause button events
     this is the only place that starts and stops the animation loop
     any other places that call this.loop() add another layer and prevent the simulation
     from being paused properly
     */
    this.animationToggleService.animationsstatus$.subscribe(res => {
          if (res) { // true boolean
            this.loop();
          }else {
            // stop animation and clear timestamp
            window.cancelAnimationFrame(this.frame);
            this.frame = null;
          }
    });
  }

  addNewParticles(): void {
    // if we're at our max, stop emitting.
    if (this.particles.length > this.maxParticles) {
      this.particles.splice(0, 1);
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

    for (const particle of this.particles) {
      const pos = particle.position;
      // If we're out of bounds, drop this particle and move on to the next
      if (pos.x < 0 || pos.x > boundsX || pos.y < 0 || pos.y > boundsY) {
        continue;
      }

      // Move our particles
      particle.move();

      // Add this particle to the list of current particles
      currentParticles.push(particle);
    }
    // Update our global particles reference
    this.particles = currentParticles;
  }

   drawParticles(): void {
    for (const particle of this.particles) {
      this.ctx.fillStyle = particle.color;
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
        this.frame = window.requestAnimationFrame(() => {
           this.loop();
       });
     });
  }

  loop(): void {
    this.clear();
    this.update();
    this.draw();
    this.queue();
  }

}
