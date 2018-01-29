import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ScreenComponent } from './screen.component';
import {ParticleTypeService} from '../services/particle-type.service';
import {AnimationToggleService} from '../services/animation-toggle.service';
import {MaterialModule} from '../../assets/material/material.module';

describe('ScreenComponent', () => {
  let component: ScreenComponent;
  let fixture: ComponentFixture<ScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MaterialModule],
      providers: [ParticleTypeService, AnimationToggleService],
      declarations: [ ScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate emitters', () => {
    expect(component.emitters.length > 0).toBeTruthy();
  });

  it('should populate particles', () => {
    expect(component.particles.length > 0).toBeTruthy();
  });

  it('should be in animation loop', () => {
    expect(component.frame > 0).toBeTruthy();
  });

});
