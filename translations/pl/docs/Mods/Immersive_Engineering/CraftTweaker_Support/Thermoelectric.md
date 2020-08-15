# Thermoelectric
The Thermoelectric package can be used to register or unregister temperatures for blocks to allow them to power the Immersive Engineering Thermoelectric Generator. Liquids inherently have a temperature, so they do not and cannot be registered. Temperatures are in Kelvin.

## Wezwanie do pakietu
You can call the Thermoelectric package using `mods.immersiveengineering.Thermoelectric`.

## Add Temperature Source

| Wymagane | Typ             | Typ danych                                       |
| -------- | --------------- | ------------------------------------------------ |
| Wymagane | Target Block    | [Składnik](/Vanilla/Variable_Types/IIngredient/) |
| Wymagane | Temperature (K) | Liczba całkowita                                 |

### Przykład
```zenscript
//Example:
mods.immersiveengineering.Thermoelectric.addTemperatureSource(IIngredient source, int temperature);

mods.immersiveengineering.Thermoelectric.addTemperatureSource(<minecraft:obsidian>, 1272);
```


## Remove Temperature Source

| Wymagane | Typ          | Typ danych                                       |
| -------- | ------------ | ------------------------------------------------ |
| Wymagane | Target Block | [Składnik](/Vanilla/Variable_Types/IIngredient/) |

### Przykład
```zenscript
//Example:
mods.immersiveengineering.Thermoelectric.removeTemperatureSource(IIngredient source);

mods.immersiveengineering.Thermoelectric.removeTemperatureSource(<minecraft:obsidian>);
```
