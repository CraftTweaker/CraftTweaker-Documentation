# Thermoelektrisch
Das Thermoelektrische Paket kann verwendet werden, um Temperaturen für Blöcke zu registrieren oder zu entfernen, damit sie den Immersive Engineering Thermoelektrischen Generator nutzen können. Flüssigkeiten haben von Natur aus eine Temperatur, so dass sie nicht registriert werden können und können. Die Temperaturen sind in Kelvin.

## Hinzufügen des Packages
Sie können das Thermoelektrische Paket mit `mods.immersiveengineering.Thermoelectric` anrufen.

## Temperaturquelle hinzufügen

| Benötigt | Type           | Datentyp                                            |
| -------- | -------------- | --------------------------------------------------- |
| Benötigt | Zielblock      | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Temperatur (K) | Ganzzahl                                            |

### Beispiel
```zenscript
//Beispiel:
mods.immersiveengineering.Thermoelectric.addTemperatureSource(IIngredient Source, int temperature);

mods.immersiveengineering.Thermoelectric.addTemperatureSource(<minecraft:obsidian>, 1272);
```


## Temperaturquelle entfernen

| Benötigt | Type      | Datentyp                                            |
| -------- | --------- | --------------------------------------------------- |
| Benötigt | Zielblock | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |

### Beispiel
```zenscript
//Beispiel:
mods.immersiveengineering.Thermoelectric.removeTemperatureSource(IIngredient Source);

mods.immersiveengineering.Thermoelectric.removeTemperatureSource(<minecraft:obsidian>);
```
