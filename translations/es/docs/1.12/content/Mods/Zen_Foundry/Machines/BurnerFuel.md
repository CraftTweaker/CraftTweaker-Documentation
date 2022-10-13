# Burner Fuel

A class to configure valid fuels for the burner heater.

## Import
```zenscript
import mods.foundry.BurnerHeater;
```

## Methods
```zenscript
// Adds an ingredient as fuel with the time it takes to burn and the temperature of heat provided by the fuel
BurnerHeater.addFuel(IIngredient fuel, int time, int heat);

// Removes a fuel from the fuel list
BurnerHeater.removeFuel(IItemStack stack);

// Clears all fuels from the fuel list
// If the config option to populate the fuel list with furnace values is enabled,
// clearing the burner heater list will add furnace fuels to the fuel list automatically
BurnerHeater.clear();
```
