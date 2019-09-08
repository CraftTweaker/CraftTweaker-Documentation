# Bottling Machine

## Calling The Package

You can call the BottlingMachine package using `mods.immersiveengineering.BottlingMachine`.

## 添加配方

| Required | 类型     | Data Type                                           |
| -------- | ------ | --------------------------------------------------- |
| 必要       | Output | [IItemstack](/Vanilla/Items/IItemStack/)            |
| 必要       | Input  | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Required | Fluid  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)        |

### 例子

```zenscript
//Example:
mods.immersiveengineering.BottlingMachine.addRecipe(IItemStack output, IIngredient input, ILiquidStack fluid);
mods.immersiveengineering.BottlingMachine.addRecipe(<minecraft:diamond>, <ore:logWood>, <liquid:water>);
```

## Remove Recipe

| Type   | Data Type                                |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Example

```zenscript
//Example:
mods.immersiveengineering.BottlingMachine.removeRecipe(IItemStack output);
mods.immersiveengineering.BottlingMachine.removeRecipe(<minecraft:diamond>);
```