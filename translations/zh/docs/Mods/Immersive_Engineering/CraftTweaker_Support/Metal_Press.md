# 金属按

金属新闻包可以用来添加/移除沉浸式工程金属压载机配方。

## 调用包

您可以使用 `mods.immersiveengineering.MetalPress` 来调用MetalPress 包。

## 添加配方

| 必填 | 类型         | 数据类型                                                    |
| -- | ---------- | ------------------------------------------------------- |
| 必要 | 输出         | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)           |
| 必要 | 输入         | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| 必填 | 最小值        | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)           |
| 必要 | 能源         | 整型                                                      |
| 必要 | Input Size | 整型                                                      |

### 例子

```zenscript
//示例：
mods.immersiveengineering.MetalPress.addRecipe(IItemStack output, IIngredient input, IItemStack mold, int energy, @Optional int inputSize);

mods. mmersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, , 2000);
mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000, 16);
```

## 删除配方

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子

```zenscript
//示例：
mods.immersiveengineering.MetalPress.removeRecipe(IItemstack 输出)；

mods.immersiveengineering.MetalPress.removeRecipe(<minecraft:diamond>)；
```

## 按Mold删除

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子

```zenscript
//示例：
mods.immersiveengineering.MetalPress.removeRecipeByMold(Itemstack output)；

mods.immersiveengineering.MetalPress.removeRecipeByMold(<minecraft:diamond>)；
```