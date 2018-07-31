# 压力室(Pressure Chamber)

压力室是一个多方块结构，它使用压缩空气将一或多个物品转化为另一个或多个物品。压力室的配方和当前的压力有关，即需要达到一定 bar 的压力才能够发生转化。

## 导入

使用 `mods.pneumaticcraft.pressurechamber` 以导入压力室相关包。

## 移除

以下函数会移除第一个 `output（输出）` 为指定[材料(IIngredient)](/Vanilla/Variable_Types/IIngredient)的配方：

```
mods.pneumaticcraft.pressurechamber.removeRecipe(IIngredient output);
//output 输出

// 实例
mods.pneumaticcraft.pressurechamber.removeRecipe(<pneumaticcraft:ingot_iron_compressed>);
```

以下函数会移除*所有*压力室配方：

```
mods.pneumaticcraft.pressurechamber.removeAllRecipes();
```

## 添加

以下函数用于添加压力室配方：

```
mods.pneumaticcraft.pressurechamber.addRecipe(IIngredient[] input, double pressure, IItemStack[] output);
//input 输入（数组）
//pressure 最低气压
//output 输出（数组）

// 实例
mods.pneumaticcraft.pressurechamber.addRecipe([<minecraft:gold_ingot> * 2,<minecraft:apple>], 2.0, [<minecraft:golden_apple>]);
```
