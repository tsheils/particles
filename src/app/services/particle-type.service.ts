import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ParticleTypeService {
  // BehaviorSubject allows the intializing variable to be picked up by subscriptions
  private _particleTypeSource = new BehaviorSubject<string>('rain');
  //  Observable to play/pause stream
  particletype$ = this._particleTypeSource.asObservable();

  // pass selected particle type to subscribers
  setParticle(particle: string): void {
    this._particleTypeSource.next(particle);
  }
}

