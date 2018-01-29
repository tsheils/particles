import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {ScreenComponent} from './screen/screen.component';
import {MenuComponent} from './menu/menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../assets/material/material.module';
import {ParticleTypeService} from './services/particle-type.service';
import {AnimationToggleService} from './services/animation-toggle.service';
import {NO_ERRORS_SCHEMA} from "@angular/core";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas:      [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'particles'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('particles');
  }));
});
