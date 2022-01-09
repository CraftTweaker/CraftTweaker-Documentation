# 生命灌注（Life Infusion）
The *infusion* package is used for adding or removing recipes to/from the Life Infusion process.

## 导入
You can call the *infusion* package using `mods.skyresources.infusion`

## Recipe Addition

```zenscript
//mods.skyresources.infusion.addRecipe(<产物>, <原料>, 灌注的方块, 消耗生命数);
mods.skyresources.infusion.addRecipe(<minecraft:diamond> * 8, <minecraft:nether_star>, <minecraft:dirt>, 14);
```

## Recipe Removal

```zenscript
//mods.skyresources.infusion.removeRecipe(<产物>);
mods.skyresources.infusion.removeRecipe(<minecraft:cactus>);
```