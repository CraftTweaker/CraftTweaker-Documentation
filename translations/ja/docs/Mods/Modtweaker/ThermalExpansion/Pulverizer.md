# 粉砕機

## パッケージ

`mods.thermalexpansion.Pulverizer`

## 加算

```zenscript
mods.thermalexpansion.Pulverizer.addRecipe(IItemStack 出力, IItemStack 入力, int エネルギー, @Optional IItemStack secondaryOutput, @Optional int secondaryChance);

mods.thermalexpansion.Pulverizer.addRecipe(<minecraft:diamond>, <minecraft:stick>, 1500, <minecraft:stone>, 20);
```

## 削除

```zenscript
mods.thermalexpansion.Pulverizer.removeRecipe(IItemStack input);

mods.thermalexpansion.Pulverizer.removeRecipe(<thermalfoundation:material:136>);
```