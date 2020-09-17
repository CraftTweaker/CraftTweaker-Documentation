# 热帧冷却中

热帧冷却可用来将物品放置在箱子或其他物品库中，附加热帧, 并将其冷却到低于0°C(通常使用Vortex Tube)。

## 导入包

您可以使用 `mods.pneumaticcraft.heatframecooling` 调用热帧冷却包

## 移除配方

该方法移除其找到的第一个以指定的[IIngredient](/Vanilla/Variable_Types/IIngredient/)作为`输出`的合成配方：

```zenscript
mods.pneumaticraft.heatframecooling.removeRecipe(IIngredient output);
// 示例
mods.pneumaticraft.heatframecooling.removeRecipe(<minecraft:obsidian>);
```

此函数可移除 *所有* 热帧冷却配方：

```zenscript
mods.pneumaticcraft.heatframecooling.removeAllRecipes();
```

## 添加

这些函数用于为热帧冷却系统添加新配方：

```zenscript
mods.pneumaticcraft.heatframecooling.addRecipe(IItemStack input, IItemStack output);
mods.pneumaticcraft.heatframecooling.addRecipe(IOreDictEntry input, IItemStack output);

// Example
mods.pneumaticcraft.heatframecooling.addRecipe(<minecraft:slime_ball>, <minecraft:snow_ball>);
```