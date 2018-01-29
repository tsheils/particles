import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ParticleTypeService} from '../services/particle-type.service';
import {AnimationToggleService} from '../services/animation-toggle.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  particleTypeCtrl: FormControl = new FormControl(); // form controller for the particle type dropdown
  weather: string[] = ['rain', 'snow']; // possible values
  status: boolean; // used to track animation status and change play/pause button

  constructor(private particleTypeService: ParticleTypeService,
              private animationToggleService: AnimationToggleService ) {}

  ngOnInit() {
    // set default weather type
    this.particleTypeCtrl.setValue(this.weather[0]);
    // subscribe to value changes to the particle type dropdown
    this.particleTypeCtrl.valueChanges.subscribe(value => {
      // pass value to options service
      this.particleTypeService.setParticle(value);
    });

    // subscrible to animation status changes and set status accordingly
    this.animationToggleService.animationsstatus$.subscribe(res => {
      this.status = res;
    });

  }

 // handle button clicks by calling service
  toggleAnimation(): void {
    this.animationToggleService.toggleAnimation();
  }

}
