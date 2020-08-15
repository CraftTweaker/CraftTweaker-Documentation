# 关键的

此软件包允许您将配方添加到/从巡洋舰中移除。

## 导入相关包

您可以 [导入](/AdvancedFunctions/Import/) 个软件包及其方法来方便检索这些方法。

```zenscript
导入mods.thaumcraft.crucib;
```

## 添加配方

```zenscript
//mods.thaumcraft.Crucible.registerRecipe(String name, String researchKey, IItemStack output, IIngredient input, CTapertStack[] aspects;
mods.thaumcraft.crucible.registerRecipe("crypleTest", "", <minecraft:diamond>, <minecraft:stick>, [<aspect:aer>]);
```

## 删除配方

```zenscript
//mods.thaumcraft.crucible.removeRecipe(String name);
mods.thaumcraft.crucible.removeRecipe("recipeName");


///mods.thaumcraft.crucible.removeRecipe(IItemStack output);
mods.thaumcraft.crucible.removeRecipe(<minecraft:leather>);
```