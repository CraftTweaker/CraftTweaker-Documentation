# Squeezer
The Squeezer package can be used to add/remove recipes to/from the Immersive Engineering Squeezer.

## Calling The Package
You can call the Squeezer package using `mods.immersiveengineering.Squeezer`.

## 添加配方

| Required | 类型     | 数据类型                                                    |
| -------- | ------ | ------------------------------------------------------- |
| Required | 输出     | [IItemStack](/Vanilla/Items/IItemStack/)                |
| Required | Fluid  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)            |
| Required | 输入     | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| Required | Energy | 整型                                                      |

### 例子
```zenscript
//Example:
mods.immersiveengineering.Squeezer.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);

mods.immersiveengineering.Squeezer.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```



## Remove Fluid Recipe

| 类型 | 数据类型                                         |
| -- | -------------------------------------------- |
| 输出 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### 例子
```zenscript
//Example:
mods.immersiveengineering.Squeezer.removeFluidRecipe(ILiquidStack fluid);

mods.immersiveengineering.Squeezer.removeFluidRecipe(<liquid:water>);
```



## Remove Item Recipe

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子
```zenscript
//Example:
mods.immersiveengineering.Squeezer.removeItemRecipe(IItemStack stack);

mods.immersiveengineering.Squeezer.removeItemRecipe(<minecraft:diamond>);
```



## Remove By Input

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子
```zenscript
//Example:
mods.immersiveengineering.Squeezer.removeByInput(IItemStack stack);

mods.immersiveengineering.Squeezer.removeByInput(<minecraft:log>);
```