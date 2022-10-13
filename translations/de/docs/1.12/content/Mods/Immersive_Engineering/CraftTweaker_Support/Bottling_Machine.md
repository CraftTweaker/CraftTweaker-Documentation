# Bottling Machine

## Hinzufügen des Packages
You can call the BottlingMachine package using `mods.immersiveengineering.BottlingMachine`.

## Rezept hinzufügen
| Required | Type   | Datentyp                                            |
| -------- | ------ | --------------------------------------------------- |
| Required | Output | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Required | Input  | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Required | Fluid  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)        |

### Beispiel
```zenscript
//Example:
mods.immersiveengineering.BottlingMachine.addRecipe(IItemStack output, IIngredient input, ILiquidStack fluid);
mods.immersiveengineering.BottlingMachine.addRecipe(<minecraft:diamond>, <ore:logWood>, <liquid:water>);
```


## Rezept entfernen
| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel
```zenscript
//Example:
mods.immersiveengineering.BottlingMachine.removeRecipe(IItemStack output);
mods.immersiveengineering.BottlingMachine.removeRecipe(<minecraft:diamond>);
```