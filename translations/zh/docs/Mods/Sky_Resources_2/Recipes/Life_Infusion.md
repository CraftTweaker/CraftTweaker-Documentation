# 生命灌注（Life Infusion）

*infusion* 包可用于添加或者移除生命灌注的配方

## 导入包

导入*infusion* 包用 `mods.skyresources.infusion`这条语句。

## 添加配方

```zenscript
//mods.skyresources.infusion.addRecipe(<产物>, <原料>, 灌注的方块, 消耗生命数);
mods.skyresources.infusion.addRecipe(<minecraft:diamond> * 8, <minecraft:nether_star>, <minecraft:dirt>, 14);
```

## 删除配方

```zenscript
//mods.skyresources.infusion.removeRecipe(<产物>);
mods.skyresources.infusion.removeRecipe(<minecraft:cactus>);
```