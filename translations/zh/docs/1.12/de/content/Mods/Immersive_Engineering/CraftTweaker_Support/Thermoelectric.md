# Thermoelectric
The Thermoelectric package can be used to register or unregister temperatures for blocks to allow them to power the Immersive Engineering Thermoelectric Generator. Liquids inherently have a temperature, so they do not and cannot be registered. Temperatures are in Kelvin.

## Hinzufügen des Packages
You can call the Thermoelectric package using `mods.immersiveengineering.Thermoelectric`.

## Add Temperature Source

| Benötigt | 类型              | Datentyp                                                |
| -------- | --------------- | ------------------------------------------------------- |
| Benötigt | Target Block    | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Temperature (K) | 整型                                                      |

### Beispiel
```zenscript
//Example:
mods.immersiveengineering.Thermoelectric.addTemperatureSource(IIngredient source, int temperature);

mods.immersiveengineering.Thermoelectric.addTemperatureSource(<minecraft:obsidian>, 1272);
```


## Remove Temperature Source

| Required | 类型           | Datentyp                                                |
| -------- | ------------ | ------------------------------------------------------- |
| Required | Target Block | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |

### Beispiel
```zenscript
//Example:
mods.immersiveengineering.Thermoelectric.removeTemperatureSource(IIngredient source);

mods.immersiveengineering.Thermoelectric.removeTemperatureSource(<minecraft:obsidian>);
```
