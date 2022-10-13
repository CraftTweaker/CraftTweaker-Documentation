# Fluid Fuel

A class to configure valid fuels for the fluid heater.

## Import
```zenscript
import mods.foundry.FluidHeater;
```

## Methoden
```zenscript
// Adds a liquid as fuel (optionally with specified temperature) to the fuel list
FluidHeater.addFuel(ILiquidDefinition fuel, @Optional int heat);

// Removes a liquid from the fuel list
FluidHeater.removeFuel(ILiquidDefinition liquid);

// Clears all liquids from the fuel list
FluidHeater.clear();
```
