"use strict";

class Thermostat{

  constructor(){
    this.temperature = 20
    this.powerSave = true
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.MINIMUM_TEMP = 10;
  }

  temp(){
    return this.temperature
  }

  up(){
    if(this.powerSave && this.temperature >= this.MAX_LIMIT_PSM_ON) {
      throw "Maximum temperature reached"
    }
    else if(this.temperature >= this.MAX_LIMIT_PSM_OFF) {
      throw "Maximum temperature reached"
    }
    this.temperature ++
  }

  down(){
    if (this.temperature <= this.MINIMUM_TEMP) {
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
    if (this.temperature > this.MAX_LIMIT_PSM_ON) {
      this.temperature = 25;
    } else {
        this.temperature
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
