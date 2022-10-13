# Metal Press
The Metal Press package can be used to add/remove recipes to/from the Immersive Engineering Metal Press.


## Calling The Package
You can call the MetalPress package using `mods.immersiveengineering.MetalPress`.


## 添加配方

| Required | 类型         | 数据类型                                                    |
| -------- | ---------- | ------------------------------------------------------- |
| Required | 输出         | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)           |
| Required | 输入         | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| Required | Mold       | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)           |
| Required | Energy     | 整型                                                      |
| Required | Input Size | 整型                                                      |

### 例子
```zenscript
//Example:
mods.immersiveengineering.MetalPress.addRecipe(IItemStack output, IIngredient input, IItemStack mold, int energy, @Optional int inputSize);

mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000);
mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000, 16);
```



## Remove Recipe

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子
```zenscript
//Example:
mods.immersiveengineering.MetalPress.removeRecipe(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipe(<minecraft:diamond>);
```



## Remove By Mold

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子
```zenscript
//Example:
mods.immersiveengineering.MetalPress.removeRecipeByMold(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipeByMold(<minecraft:diamond>);
```