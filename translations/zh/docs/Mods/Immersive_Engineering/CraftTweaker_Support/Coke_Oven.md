# 焦炭矿石

## 调用包

您可以使用 `mods.immersiveengineering.cokeOven` 来调用 CokeOven 软件包。

## 添加配方

| 必填 | 类型   | 数据类型                                                    |
| -- | ---- | ------------------------------------------------------- |
| 必要 | 输出   | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)           |
| 必要 | 燃料输出 | 整型                                                      |
| 必填 | 输入   | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| 必要 | 时间   | 整型                                                      |

### 例子

```zenscript
//示例：
mods.immersiveengineering.cokeOven.addRecipe(IItemStack output, int put, IIngredient input, int time);
mods.immersiveengineering.cokeOven.addRecipe(<minecraft:coal>, 2, <ore:logWood>, 2000年)；
```

## 删除配方

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 比如：

```zenscript
//示例：
mods.immersiveengineering.cokeOven.removeRecipe(IItemStack 输出)；
mods.immersiveengineering.cokeOven.removeRecipe(<minecraft:diamond>)；
```