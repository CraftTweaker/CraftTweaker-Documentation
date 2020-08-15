# Still

ModTweakerを使用すると、フォレストリースチルレシピを追加または削除できます

## 発信中

You can call the package using `mods.forestry.Still`

## レシピの削除

```zenscript
//mods.forestry.Still.removeRecipe(ILiquidStack 出力, @Optional ILiquidStack fluidInput);
mods.forestry.Still.removeRecipe(<liquid:bio.ethanol>);
mods.forestry.Still.removeRecipe(<liquid:refinedcanolaoil>,<liquid:canolaoil>);
```

## レシピの追加

```zenscript
//mods.forestry.Still.addRecipe(ILiquidStack fluidOutput, ILiquidStack fluidInput, int timePerUnit);
mods.forestry.Still.addRecipe(<liquid:lava>, <liquid:water>, 200);
```