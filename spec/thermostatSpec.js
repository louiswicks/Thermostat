"use strict";

describe("thermostat", function(){
  var thermostat;

  it("thermostat should return 20 degrees starting point", function(){
    thermostat = new Thermostat();
    expect(thermostat.temp()).toBe(20);
  });
});
