# 导热框架冷却（Heat Frame Cooling）

导热框架冷却用于将物品转化为另一种物品，将物品放入装有导热框架且温度降至 0°C 以下的箱子或者其他容器（通常会使用流涡管）中即可完成转化。

## 导入

使用 `mods.pneumaticcraft.heatframecooling` 以导入导热框架冷却相关包

## 移除

以下函数会移除第一个 `output (输出)` 为指定[材料（IIngredient）](/Vanilla/Variable_Types/IIngredient)的配方：

```
mods.pneumaticcraft.heatframecooling.removeRecipe(IIngredient output);
//output 输出

//实例
mods.pneumaticcraft.heatframecooling.removeRecipe(<minecraft:obsidian>);
```

以下函数会移除*所有*导热框架冷却配方：

```
mods.pneumaticcraft.heatframecooling.removeAllRecipes();
```

## 添加

以下函数用于添加导热框架冷却系统配方：

```
mods.pneumaticcraft.heatframecooling.addRecipe(IItemStack input, IItemStack output);
mods.pneumaticcraft.heatframecooling.addRecipe(IOreDictEntry input, IItemStack output);
//input 输入
//output 输出

//实例
mods.pneumaticcraft.heatframecooling.addRecipe(<minecraft:slime_ball>, <minecraft:snowball>);
```
