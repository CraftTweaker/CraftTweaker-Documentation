# Bottling Machine

## Calling The Package
You can call the BottlingMachine package using `mods.immersiveengineering.BottlingMachine`.

## Add Recipe
| Required | Tipo   | Data Type                                           |
| -------- | ------ | --------------------------------------------------- |
| Required | Output | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Required | Input  | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Required | Fluid  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)        |

### Example
```zenscript
//Example:
mods.immersiveengineering.BottlingMachine.addRecipe(IItemStack output, IIngredient input, ILiquidStack fluid);
mods.immersiveengineering.BottlingMachine.addRecipe(<minecraft:diamond>, <ore:logWood>, <liquid:water>);
```


## Remove Recipe
| Tipo   | Data Type                                |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Example
```zenscript
//Example:
mods.immersiveengineering.BottlingMachine.removeRecipe(IItemStack output);
mods.immersiveengineering.BottlingMachine.removeRecipe(<minecraft:diamond>);
```