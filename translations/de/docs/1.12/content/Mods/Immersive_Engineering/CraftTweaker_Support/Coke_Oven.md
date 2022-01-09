# Coke Oven

## Hinzufügen des Packages
You can call the CokeOven package using `mods.immersiveengineering.CokeOven`.

## Rezept hinzufügen
| Required | Type        | Datentyp                                            |
| -------- | ----------- | --------------------------------------------------- |
| Required | Output      | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Required | Fuel Output | Integer                                             |
| Required | Input       | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Required | Time        | Integer                                             |

### Beispiel
```zenscript
//Example:
mods.immersiveengineering.CokeOven.addRecipe(IItemStack output, int fuelOutput, IIngredient input, int time);
mods.immersiveengineering.CokeOven.addRecipe(<minecraft:coal>, 2, <ore:logWood>, 2000);
```


## Rezept entfernen
| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel:
```zenscript
//Example:
mods.immersiveengineering.CokeOven.removeRecipe(IItemStack output);
mods.immersiveengineering.CokeOven.removeRecipe(<minecraft:diamond>);
```