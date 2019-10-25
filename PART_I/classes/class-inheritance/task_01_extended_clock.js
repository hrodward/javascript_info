
"use strict";

class ExtendedClock extends Clock {

  constructor(template, precision = 1000) {
    super(template);
    this.precision = precision;
  }

  start() {
    super.render();
    super.timer = setInterval(() => super.render(), this.precision);
  }

}

let ec = new ExtendedClock({ template: 'h:m:s' }, 2000);
ec.start();