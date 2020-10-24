# Thermoelectric
The Thermoelectric package can be used to register or unregister temperatures for blocks to allow them to power the Immersive Engineering Thermoelectric Generator. Liquids inherently have a temperature, so they do not and cannot be registered. Temperatures are in Kelvin.

## Calling The Package
You can call the Thermoelectric package using `mods.immersiveengineering.Thermoelectric`.

## Add Temperature Source

| Required | Type            | Data Type                                           |
| -------- | --------------- | --------------------------------------------------- |
| Required | Target Block    | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Required | Temperature (K) | Integer                                             |

### Example
```zenscript
//Example:
mods.immersiveengineering.Thermoelectric.addTemperatureSource(IIngredient source, int temperature);

mods.immersiveengineering.Thermoelectric.addTemperatureSource(<minecraft:obsidian>, 1272);
```


## Remove Temperature Source

| Required | Type         | Data Type                                           |
| -------- | ------------ | --------------------------------------------------- |
| Required | Target Block | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |

### Example
```zenscript
//Example:
mods.immersiveengineering.Thermoelectric.removeTemperatureSource(IIngredient source);

mods.immersiveengineering.Thermoelectric.removeTemperatureSource(<minecraft:obsidian>);
```
