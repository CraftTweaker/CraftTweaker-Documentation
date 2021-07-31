# 爆炸合成

爆炸合成指将一个物品被丢出后在受到爆炸时转化为另一个物品。 （随机）损耗率可以被指定。 默认情况下，爆炸合成用来将铁锭以 20% 的损失率转化为压缩铁锭。

## 导入

使用`mods.pneumaticcraft.explosioncrafting`导入爆炸合成相关包。

## 移除配方

该方法移除其找到的第一个以指定的[IIngredient](/Vanilla/Variable_Types/IIngredient/)作为`输出`的合成配方：

```zenscript
mods.pneumaticcraft.explosioncrafting.removeRecipe(IIngredient output);
// 例子
mods.pneumaticcraft.explosioncrafting.removeRecipe(<pneumaticcraft:ingot_iron_compressed>);
```

此方法移除*所有*爆炸合成配方：

```zenscript
mods.pneumaticcraft.explosioncrafting.removeAllRecipes();
```

## 添加配方

这些方法用于添加爆炸合成配方：

```zenscript
mods.pneumaticcraft.explosioncrafting.addRecipe(IItemStack input, IItemStack output, int loss_rate);
mods.pneumaticcraft.explosioncrafting.addRecipe(IOreDictEntry input, IItemStack output, int loss_rate);

// 例子
mods.pneumaticcraft.explosioncrafting.removeAllRecipes();
// 专家模式的整合包也许会使得铁的损失率很高，而钢就要高一些。
mods.pneumaticcraft.explosioncrafting.addRecipe(<ore:ingotIron>, <pneumaticcraft:ingot_iron_compressed>, 95);
mods.pneumaticcraft.explosioncrafting.addRecipe(<ore:ingotSteel>, <pneumaticcraft:ingot_iron_compressed>, 10);
// 一个以（平均）4 倍的地狱岩消耗制造大量地狱砖的方法
mods.pneumaticcraft.explosioncrafting.addRecipe(<ore:netherrack>, <minecraft:netherbrick>, 75);
```