# 装瓶机

## 调用包

您可以使用 `mods.immersiveengineering.BottlingMachine` 来调用 BottlingMachine 包。

## 添加配方

| 必填 | 类型 | 数据类型                                                    |
| -- | -- | ------------------------------------------------------- |
| 必要 | 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)           |
| 必要 | 输入 | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| 必填 | 流体 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)            |

### 例子

```zenscript
//示例：
mods.immersiveengineering.BottlingMachine.addRecipe(IItemStack output, IIngredient input, ILiquidStack fluid)；
mods.immersiveengineering.BottlingMachine.addRecipe(<minecraft:diamond>, <ore:logWood>, <liquid:water>);
```

## 删除配方

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子

```zenscript
//示例：
mods.immersiveengineering.BottlingMachine.removeRecipe(IItemStack 输出);
mods.immersiveengineering.BottlingMachine.removeRecipe(<minecraft:diamond>);
```