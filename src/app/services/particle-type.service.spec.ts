
import { ParticleTypeService } from './particle-type.service';

describe('ParticleTypeService without the TestBed', () => {
  let service: ParticleTypeService;

  beforeEach(() => { service = new ParticleTypeService(); });

  it('#ParticleTypeService should return observable value', (done: DoneFn) => {
    service.particletype$.subscribe(value => {
      expect(value).toBe('rain');
      done();
    });
  });

  it('#ParticleTypeService should return "snow"', (done: DoneFn) => {
    service.setParticle('snow');
    service.particletype$.subscribe(value => {
      expect(value).toBe('snow');
      done();
    });
  });
});
