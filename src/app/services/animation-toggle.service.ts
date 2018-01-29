import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AnimationToggleService {
  private playing = true;
  // BehaviorSubject allows the intializing variable to be picked up by subscriptions
  private _animationStatusSource = new BehaviorSubject<boolean>(this.playing);
  //  Observable play/pause stream
  animationsstatus$ = this._animationStatusSource.asObservable();

  // change animation
toggleAnimation(): void {
  this.playing = !this.playing;
  this._animationStatusSource.next(this.playing);
}
}

