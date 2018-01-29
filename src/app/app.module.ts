import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import {ParticleTypeService} from './services/particle-type.service';
import {MaterialModule} from '../assets/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AnimationToggleService} from './services/animation-toggle.service';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    ParticleTypeService,
    AnimationToggleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
