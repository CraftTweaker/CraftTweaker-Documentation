# Coke Oven

## Calling The Package
You can call the CokeOven package using `mods.immersiveengineering.CokeOven`.

## 添加配方
| Required | 类型          | 数据类型                                                    |
| -------- | ----------- | ------------------------------------------------------- |
| Required | 输出          | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)           |
| Required | Fuel Output | 整型                                                      |
| Required | 输入          | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| Required | Time        | 整型                                                      |

### 例子
```zenscript
//Example:
mods.immersiveengineering.CokeOven.addRecipe(IItemStack output, int fuelOutput, IIngredient input, int time);
mods.immersiveengineering.CokeOven.addRecipe(<minecraft:coal>, 2, <ore:logWood>, 2000);
```


## Remove Recipe
| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 比如：
```zenscript
//Example:
mods.immersiveengineering.CokeOven.removeRecipe(IItemStack output);
mods.immersiveengineering.CokeOven.removeRecipe(<minecraft:diamond>);
```