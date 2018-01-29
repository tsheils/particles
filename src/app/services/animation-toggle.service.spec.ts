import {AnimationToggleService} from './animation-toggle.service';


describe('AnimationToggleService without the TestBed', () => {
  let service: AnimationToggleService;

  beforeEach(() => { service = new AnimationToggleService(); });

  it('#AnimationToggleService should return observable value', (done: DoneFn) => {
    service.animationsstatus$.subscribe(value => {
      expect(value).toBe(true);
      done();
    });
  });

  it('#AnimationToggleService should return false', (done: DoneFn) => {
    service.toggleAnimation();
    service.animationsstatus$.subscribe(value => {
      expect(value).toBe(false);
      done();
    });
  });
});
