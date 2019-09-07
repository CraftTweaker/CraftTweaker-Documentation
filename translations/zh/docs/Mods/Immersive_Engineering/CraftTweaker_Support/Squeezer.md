# Squeezer

The Squeezer package can be used to add/remove recipes to/from the Immersive Engineering Squeezer.

## Calling The Package

You can call the Squeezer package using `mods.immersiveengineering.Squeezer`.

## 添加配方

| Required | 类型     | Data Type                                           |
| -------- | ------ | --------------------------------------------------- |
| 必要       | Output | [IItemStack](/Vanilla/Items/IItemStack/)            |
| 必要       | Fluid  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)        |
| Required | Input  | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| 必要       | Energy | Integer                                             |

### 例子

```zenscript
//Example:
mods.immersiveengineering.Squeezer.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);

mods.immersiveengineering.Squeezer.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## Remove Fluid Recipe

| Type   | Data Type                                    |
| ------ | -------------------------------------------- |
| Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Example

```zenscript
//Example:
mods.immersiveengineering.Squeezer.removeFluidRecipe(ILiquidStack fluid);

mods.immersiveengineering.Squeezer.removeFluidRecipe(<liquid:water>);
```

## Remove Item Recipe

| Type   | Data Type                                |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Example

```zenscript
//Example:
mods.immersiveengineering.Squeezer.removeItemRecipe(IItemStack stack);

mods.immersiveengineering.Squeezer.removeItemRecipe(<minecraft:diamond>);
```

## Remove By Input

| Type   | Data Type                                |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Example

```zenscript
//Example:
mods.immersiveengineering.Squeezer.removeByInput(IItemStack stack);

mods.immersiveengineering.Squeezer.removeByInput(<minecraft:log>);
```