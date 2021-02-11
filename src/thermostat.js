"use strict";

class Thermostat{

  constructor(){
    this.temperature = 20
    this.powerSave = true
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
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

  switchPowerSavingModeOn(){
    if (this.temperature > 25) {
      this.temperature = 25;
    } else {
        temp()
    }
    this.powerSave = true;
  }

  switchPowerSavingModeOff() {
    this.powerSave = false;
  }

  reset() {
    this.temperature = 20
  }

  energy_state() {
    if (this.temperature < 18) {
      return "Low"
    }
    else if (this.temperature <= 25) {
      return "Medium"
    }
    else {
      return "High"
    }
  }
}
