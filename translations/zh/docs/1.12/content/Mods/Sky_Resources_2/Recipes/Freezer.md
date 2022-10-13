# 冰箱(Freezer)
The *freezer* package is used for adding or removing recipes to/from the Freezer.

## 导入
You can call the *freezer* package using `mods.skyresources.freezer`

## Recipe Addition

```zenscript
//mods.skyresources.freezer.addRecipe(<产物>, <原料>,tick数);
mods.skyresources.freezer.addRecipe(<minecraft:ice>, <minecraft:dirt>, 900);
```

## Recipe Removal

```zenscript
//mods.skyresources.freezer.removeRecipe(<产物>);
mods.skyresources.freezer.removeRecipe(<minecraft:ice>);
```