# 高炉高炉子

爆破熔炉包件可以用来添加/移除配方/燃料到沉浸式工程爆破炉。

## 调用包

您可以使用 `mods.immersiveengineering.BlastFurnace` 调用BlastFurnace 软件包。

## 添加食谱：

| 必填 | 类型   | 数据类型                                                    |
| -- | ---- | ------------------------------------------------------- |
| 必要 | 输出   | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)           |
| 必要 | 输入   | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| 必填 | 时间   | 整型                                                      |
| 可选 | Slag | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)           |

### 例子

```zenscript
//示例：
mods.immersiveengineering.BlastFurnace.addRecipe(IItemStack output, IIngredient input, int time, @Optional IItemStack slag);
mods.immersiveengineering. lastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000);
mods.immersiveengineering.BlastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000, <minecraft:dirt>);
```

## 删除配方

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 比如：

```zenscript
//示例：
mods.immersiveengineering.BlastFurnace.removeRecipe(IItemStack 输出)；
mods.immersiveengineering.BlastFurnace.removeRecipe(<minecraft:diamond>;
```

## 添加燃料

| 必填 | 返回值类型 | 数据类型                                                    |
| -- | ----- | ------------------------------------------------------- |
| 必填 | 输入    | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| 必填 | 时间    | 整型                                                      |

### 例子

```zenscript
//示例：
mods.immersiveengineering.BlastFurnace.addFuel(IIngredient input, int time)；
mods.immersiveengineering.BlastFurnace.addFuel(<ore:plankWood>, 2000年)；
```

## 移除燃料

| 必填 | 返回值类型 | 数据类型                                          |
| -- | ----- | --------------------------------------------- |
| 必填 | 输出    | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子

```zenscript
//示例：
mods.immersiveengineering.BlastFurnace.removeFuel(IItemStack 输出)；
mods.immersiveengineering.BlastFurnace.removeFuel(<minecraft:planks>)；
```