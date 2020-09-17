# 抽水器（Water Extractor）

*waterextractor*包用于添加或删除抽水器抽取或释放的配方。

## 导入包

导入*infusion* 包用 `mods.skyresources.waterextractor`这条语句。

## 添加配方

```zenscript
//mods.skyresources.waterextractor.extract.addRecipe(int waterOut, IItemStack output, IIngredient input);
mods.skyresources.waterextractor.addRecipe(500, <minecraft:dirt>, <minecraft:leaves>);

//mods. kyresources.waterextractor.insert.addRecipe(IItemStack output, Ingredient input, int waterIn);
mods.skyresources.waterextractor.insert.addRecipe(<minecraft:dirt>, <minecraft:cobblestone>, 100);
```

## 删除配方

```zenscript
//mods.skyresources.waterextractor.extract.removeRecipe(int waterOut, IItemStack output, IIngredient input);
mods.skyresources.waterxtractor.removeRecipe(50, null, <minecraft:snow>);

///mods.skyresources.waterextractor.insert.removeRecipe(IItemStack output);
mods.skyresources.waterextractor.insert.reveRecipe(<minecraft:clay>);
```