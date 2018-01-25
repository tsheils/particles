import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {OptionsService} from "../services/options.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  particleTypeCtrl: FormControl;
  weather: string[] = ['rain', 'snow'];
  constructor(public optionsService: OptionsService) {
    this.particleTypeCtrl = new FormControl();
}

  ngOnInit() {
    this.particleTypeCtrl.setValue('rain');
    // subscribe to value changes to the particle type dropdown
    this.particleTypeCtrl.valueChanges.subscribe(value => {
      // pass value to options service
      this.optionsService.updateOptions.next(value);

    });
  }

}
