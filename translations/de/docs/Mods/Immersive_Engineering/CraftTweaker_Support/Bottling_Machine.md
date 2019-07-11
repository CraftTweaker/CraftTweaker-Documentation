# Bottling Machine

## Calling The Package

You can call the BottlingMachine package using `mods.immersiveengineering.BottlingMachine`.

## Rezept hinzufügen

| Required | Type   | Datentyp                                            |
| -------- | ------ | --------------------------------------------------- |
| Required | Output | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Required | Input  | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Required | Fluid  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)        |

### Example

```JAVA
//Example:
mods.immersiveengineering.BottlingMachine.addRecipe(IItemStack output, IIngredient input, ILiquidStack fluid);
mods.immersiveengineering.BottlingMachine.addRecipe(<minecraft:diamond>, <ore:logWood>, <liquid:water>);
```

## Remove Recipe

| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Example

```JAVA
//Example:
mods.immersiveengineering.BottlingMachine.removeRecipe(IItemStack output);
mods.immersiveengineering.BottlingMachine.removeRecipe(<minecraft:diamond>);
```