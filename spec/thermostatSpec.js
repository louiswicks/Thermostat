"use strict";

describe("thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it("thermostat should return 20 degrees starting point", function(){
    expect(thermostat.temp()).toBe(20);
  });

  describe("up function", function(){
    it("increases the temperature by one degree", function(){
      thermostat.up();
      expect(thermostat.temp()).toBe(21);
    })
  });

  describe("down function", function(){
    it("decreases the temperature by one degree", function(){
      thermostat.down();
      expect(thermostat.temp()).toBe(19);
    })
  });

  describe("Minimum temperature", function(){
      it('raise error when temp < 10', function(){
        var i;
        for (i = 1; i < 11; i++) {
          thermostat.down();
        }
      expect(function() {thermostat.down()} ).toThrow("Minimum temperature reached")
    });
  });

  describe("Power saving mode", function() {
    it("is on by default", function(){
      expect(thermostat.powerSave).toBe(true);
    });
    it("can be turned off", function(){
      thermostat.switchPowerSave();
        expect(thermostat.powerSave).toBe(false);
    });
    it("can be switched back on again", function(){
      thermostat.switchPowerSave();
      thermostat.switchPowerSave();
        expect(thermostat.powerSave).toBe(true);
    });
  });

});
