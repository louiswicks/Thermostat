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
});
