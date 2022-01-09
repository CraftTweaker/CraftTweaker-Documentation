# Blast Furnace
The Blast Furnace package can be used to add/remove recipes/fuels to/from the Immersive Engineering Blast Furnace.


## Calling The Package
You can call the BlastFurnace package using `mods.immersiveengineering.BlastFurnace`.


## Add Recipe:
| Required | 类型   | 数据类型                                                    |
| -------- | ---- | ------------------------------------------------------- |
| Required | 输出   | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)           |
| Required | 输入   | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| Required | Time | 整型                                                      |
| 可选       | Slag | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)           |


### 例子
```zenscript
//Example:
mods.immersiveengineering.BlastFurnace.addRecipe(IItemStack output, IIngredient input, int time, @Optional IItemStack slag);
mods.immersiveengineering.BlastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000);
mods.immersiveengineering.BlastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000, <minecraft:dirt>);
```

## Remove Recipe
| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 比如：
```zenscript
//Example:
mods.immersiveengineering.BlastFurnace.removeRecipe(IItemStack output);
mods.immersiveengineering.BlastFurnace.removeRecipe(<minecraft:diamond>;
```



## Add Fuel
| Required | 类型   | 数据类型                                                    |
| -------- | ---- | ------------------------------------------------------- |
| Required | 输入   | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| Required | Time | 整型                                                      |

### 例子
```zenscript
//Example:
mods.immersiveengineering.BlastFurnace.addFuel(IIngredient input, int time);
mods.immersiveengineering.BlastFurnace.addFuel(<ore:plankWood>, 2000);
```


## Remove Fuel
| Required | 类型 | 数据类型                                          |
| -------- | -- | --------------------------------------------- |
| Required | 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子
```zenscript
//Example:
mods.immersiveengineering.BlastFurnace.removeFuel(IItemStack output);
mods.immersiveengineering.BlastFurnace.removeFuel(<minecraft:planks>);
```