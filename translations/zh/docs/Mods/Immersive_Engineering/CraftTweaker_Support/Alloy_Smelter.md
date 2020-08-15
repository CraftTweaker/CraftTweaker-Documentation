# 合金冶炼器

合金冶炼厂包可以用于添加/移除沉浸式工程合金冶炼厂的配方。

## 调用包

您可以使用 `mods.immersiveengineering.AlloySmelter` 调用AlloySmelter 包

## 添加配方

| 必填 | 类型  | 数据类型                                                    |
| -- | --- | ------------------------------------------------------- |
| 必要 | 输出  | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)           |
| 必要 | 输入1 | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| 必填 | 输入2 | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| 必要 | 时间  | 整型                                                      |

### 例子

```zenscript
//示例：
mods.immersiveengineering.AlloySmelter.addRecipe(IItemStack 输出, IIngredient first, Igredient first, Igredient second, int time);
mods.immersiveengineering.AlloySmelter.addRecipe(<minecraft:diamond>, <ore:ingotIron>, <minecraft:dirt>, 2000)；
```

## 删除配方

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子

```zenscript
//示例：
mods.immersiveengineering.AlloySmelter.removeRecipe(IItemstack 输出)；
mods.immersiveengineering.AlloySmelter.removeRecipe(<minecraft:diamond>)；
```