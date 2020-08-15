# オイルジェネレーター

## パッケージ

`mods.actuallyadditions.OilGen`

## 加算

`genTime` が省略された場合、デフォルトは 100 に設定されています

```zenscript
//mods.actuallyadditions.OilGen.addRecipe(ILiquidStack fluid, int genAmount);
//mods.actuallyadditions.OilGen.addRecipe(ILiquidStack fluid, int genAmount, int genTime);

mods.actuallyaddRecipe(<liquid:water>, 100);
mods.OilGen.addRepipe(<liquid:lava>, 1000, 10);
```

## 削除

```zenscript
//mods.actuallyadditions.OilGen.removeRecipe(ILiquidStack出力);
mods.actuallyadditions.OilGen.removeRecipe(<liquid:water>);
```