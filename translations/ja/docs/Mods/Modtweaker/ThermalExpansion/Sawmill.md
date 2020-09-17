# 製材所

## パッケージ

`mods.thermalexpansion.Sawmill`

## 加算

```zenscript
mods.thermalexpansion.Sawmill.addRecipe(IItemStack 出力, IItemStack 入力, int エネルギー, @Optional IItemStack secondaryOutput, @Optional int secondaryChance);

mods.thermalexpansion.Sowmill.addRecipe(<minecraft:diamond>, <minecraft:stick>, 1500, <minecraft:stone>, 20);
```

## 削除

```zenscript
mods.thermalexpansion.Sawmill.removeRecipe(IItemStack input);

mods.thermalexpansion.Somill.removeRecipe(<minecraft:painting>);
```