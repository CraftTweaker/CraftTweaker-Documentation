# 流体エンリチャー

## パッケージのインポート
`mods.nuclearcraft.EnricherEnricher`

## レシピを追加中
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Enricher.addRecipe(IIngredient itemInput, ILiquidStack fluidInput, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## レシピを削除
```zenscript
mods.nuclearcraft.SupercoolerEnricher.removeRecipeWithInput(IInput, ILiquidStack fluidInput);
mods.nurcraft.mods.nuclearcraft.Enricher.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.Enricher.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.Enricher.removeAllRecipes();Enricher.removeAllRecipes();
```