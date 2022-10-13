# Bottling Machine

## Calling The Package
You can call the BottlingMachine package using `mods.immersiveengineering.BottlingMachine`.

## 添加配方
| Required | 类型    | 数据类型                                                    |
| -------- | ----- | ------------------------------------------------------- |
| Required | 输出    | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)           |
| Required | 输入    | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| Required | Fluid | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)            |

### 例子
```zenscript
//Example:
mods.immersiveengineering.BottlingMachine.addRecipe(IItemStack output, IIngredient input, ILiquidStack fluid);
mods.immersiveengineering.BottlingMachine.addRecipe(<minecraft:diamond>, <ore:logWood>, <liquid:water>);
```


## Remove Recipe
| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子
```zenscript
//Example:
mods.immersiveengineering.BottlingMachine.removeRecipe(IItemStack output);
mods.immersiveengineering.BottlingMachine.removeRecipe(<minecraft:diamond>);
```