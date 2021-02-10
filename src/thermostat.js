"use strict";

class Thermostat{

  constructor(){
    this.temperature = 20
    this.powerSave = true
  }

  temp(){
    return this.temperature
  }

  up(){
    this.temperature ++
  }

  down(){
    if (this.temperature <= 10) {
      throw "Minimum temperature reached"
    }
    else {
      this.temperature --
    }
  }

  switchPowerSave(){
    this.powerSave = !this.powerSave
  }
}
