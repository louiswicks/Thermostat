"use strict";

class Thermostat{

  constructor(){
    this.temperature = 20
  }

  temp(){
    return this.temperature
  }

  up(){
    this.temperature ++
  }

  down(){
    this.temperature --
  }
}
