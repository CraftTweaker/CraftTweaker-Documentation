# Thermo-électrique
L'ensemble Thermoélectrique peut être utilisé pour enregistrer ou déconnecter les températures des blocs pour leur permettre d'alimenter le Générateur Thermoélectrique d'Ingénierie Immersive. Les liquides ont intrinsèquement une température, donc ils ne sont pas et ne peuvent pas être enregistrés. Les températures sont en Kelvin.

## Appeler le paquet
Vous pouvez appeler le package Thermoélectrique en utilisant `mods.immersiveengineering.Thermoelectric`.

## Ajouter une source de température

| Requis | Type de texte   | Type de données                                    |
| ------ | --------------- | -------------------------------------------------- |
| Requis | Bloc cible      | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |
| Requis | Température (K) | Nombre entier                                      |

### Exemple
```zenscript
//Exemple:
mods.immersiveengineering.Thermoelectric.addTemperatureSource(IIngredient source, int temperature);

mods.immersiveengineering.Thermoelectric.addTemperatureSource(<minecraft:obsidian>, 1272);
```


## Supprimer la source de température

| Requis | Type de texte | Type de données                                    |
| ------ | ------------- | -------------------------------------------------- |
| Requis | Bloc cible    | [Ingrédient](/Vanilla/Variable_Types/IIngredient/) |

### Exemple
```zenscript
//Exemple:
mods.immersiveengineering.Thermoelectric.removeTemperatureSource(IIngredient source);

mods.immersiveengineering.Thermoelectric.removeTemperatureSource(<minecraft:obsidian>);
```
