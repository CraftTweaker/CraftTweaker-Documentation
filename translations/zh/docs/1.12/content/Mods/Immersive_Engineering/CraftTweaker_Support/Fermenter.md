# Fermenter
The Fermenter package can be used to add/remove recipes to/from the Immersive Engineering Fermenter.

## Calling The Package
You can call the Fermenter package using `mods.immersiveengineering.Fermenter`.

## 添加配方

| Required | 类型     | 数据类型                                                    |
| -------- | ------ | ------------------------------------------------------- |
| Required | 输出     | [IItemStack](/Vanilla/Items/IItemStack/)                |
| Required | Fluid  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)            |
| Required | 输入     | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| Required | Energy | 整型                                                      |

### 例子
```zenscript
mods.immersiveengineering.Fermenter.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);
mods.immersiveengineering.Fermenter.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```



## Remove Fluid Recipe
| 类型 | 数据类型                                         |
| -- | -------------------------------------------- |
| 输出 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### 例子
```zenscript
mods.immersiveengineering.Fermenter.removeFluidRecipe(ILiquidStack fluid);
mods.immersiveengineering.Fermenter.removeFluidRecipe(<liquid:water>);
```



## Remove Item Recipe

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子
```zenscript
mods.immersiveengineering.Fermenter.removeItemRecipe(IItemstack output);
mods.immersiveengineering.Fermenter.removeItemRecipe(<minecraft:diamond>);
```



## Remove By Input

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子
```zenscript
mods.immersiveengineering.Fermenter.removeByInput(IItemstack input);
mods.immersiveengineering.Fermenter.removeByInput(<minecraft:diamond>);
```