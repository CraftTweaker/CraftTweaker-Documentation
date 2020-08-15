# 錬金術イミュエ

## パッケージ

`mods.thermalexpansion.Imbuer`

## 加算

```zenscript
mods.thermalexpansion.Imbuer.addRecipe(ILiquidStack出力, IItemStack入力, ILiquidStack入力流体, int energy);

mods.thermalexpansion.Imbuer.addRecipe(<liquid:lava>, <minecraft:dirt>, <liquid:water>, 2048);
```

## 削除

```zenscript
mods.thermalexpansion.Imbuer.removeRecipe(IItemStack input, ILiquidStack secondInput);

mods.thermalexpansion.Imbuer.removeRecipe(<minecraft:dirt>, <liquid:water>);
```