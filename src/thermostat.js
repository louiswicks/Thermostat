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
    if(this.powerSave && this.temperature >= 25) {
      throw "Maximum temperature reached"
    }
    else if(this.temperature >= 32) {
      throw "Maximum temperature reached"
    }
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

  reset() {
    this.temperature = 20 
  }
}
