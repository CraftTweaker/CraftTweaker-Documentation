# 弧炉子

Arc Furnace包可以用来添加/移除沉浸式工程弧炉配方。

## 调用包

您可以使用 `mods.immersiveengineering.ArcFurnace` 调用ArcFurnace 包.

## 添加配方

| 必填 | 类型     | 数据类型                                                                          |
| -- | ------ | ----------------------------------------------------------------------------- |
| 必要 | 输出     | [IItemStack](/Vanilla/Items/IItemStack/)                                      |
| 必要 | 输入     | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/)                       |
| 必填 | Slag   | [IItemStack](/Vanilla/Items/IItemStack/)                                      |
| 必要 | 时间     | 整型                                                                            |
| 必要 | 每刻度能量数 | 整型                                                                            |
| 可选 | 添加剂    | [元素](/Vanilla/Variable_Types/IIngredient/) 数组 []                              |
| 可选 | 特殊配方类型 | 字符串 [特殊Recipetype](/Mods/Immersive_Engineering/Variables/SpecialRecipeTypes/) |

### 例子

```zenscript
//示例：
mods.immersiveengineering.ArcFurnace.addRecipe(IItemStack output, IIngredient input, IItemStack slag, int time, int energyPerTick, @Optional IIngredient[additters, @Optional String specialRecipetypeType);

mods. mersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048);
mods.immersiveengineering.ArcFurnace. ddRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>]);
mods.immersiveengineering. rcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Ores");
mods. mmersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "合金");
```

## 删除配方

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 例子

```zenscript
//示例：
mods.immersiveengineering.ArcFurnace.removeRecipe(IItemstack 输出)；
mods.immersiveengineering.ArcFurnace.removeRecipe(<minecraft:diamond>)；
```