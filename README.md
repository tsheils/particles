# Particles

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

clone git repo and run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Additional particle types

To add additional particle types: 
  1. Extend the `Vector` class to adjust the movement of each particle.
  2. Extend the `Emitter` class to emit your new Vector, adjust angle, speed and color here.
  3. Add your particle to `menu.component.ts` in the `weather` array.
  4. Add a case to the `particleType` subscription. (make sure the switch variable matches the name added in step 3)
