import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import {MaterialModule} from '../../assets/material/material.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ParticleTypeService} from "../services/particle-type.service";
import {AnimationToggleService} from "../services/animation-toggle.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {By} from "@angular/platform-browser";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let toggleEl: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        ParticleTypeService, AnimationToggleService],
      declarations: [ MenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    toggleEl  = fixture.debugElement.query(By.css('.toggle')); // find hero element
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change animation status  when clicked', () => {
    expect(component.status).toBe(true);
    toggleEl.triggerEventHandler('click', null);
    expect(component.status).toBe(false);
  });
});
