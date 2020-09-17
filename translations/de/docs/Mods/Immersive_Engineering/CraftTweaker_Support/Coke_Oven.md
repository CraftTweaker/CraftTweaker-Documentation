# Kokofen

## Hinzufügen des Packages

Sie können das CokeOven Paket mit `mods.immersiveengineering.CokeOven` anrufen.

## Rezept hinzufügen

| Benötigt | Type              | Datentyp                                            |
| -------- | ----------------- | --------------------------------------------------- |
| Benötigt | Output            | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Benötigt | Brennstoffausgabe | Ganzzahl                                            |
| Benötigt | Input             | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Time              | Integer                                             |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.CokeOven.addRecipe(IItemStack Output, int fuelOutput, IIngredient Input, int time);
mods.immersiveengineering.CokeOven.addRecipe(<minecraft:coal>, 2, <ore:logWood>, 2000);
```

## Rezept entfernen

| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel:

```zenscript
//Beispiel:
mods.immersiveengineering.CokeOven.removeRecipe(IItemStack output);
mods.immersiveengineering.CokeOven.removeRecipe(<minecraft:diamond>);
```