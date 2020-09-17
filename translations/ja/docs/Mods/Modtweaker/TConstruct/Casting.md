# キャスティング

`キャスティング` パッケージでは、キャスティングのレシピを追加または削除できます。

## 発信中

`mods.tconstruct.Casting` を使用してキャスティングパッケージを呼び出すことができます。

## キャスティングレシピを追加

You can add recipes for both, casting tables and basins: The methods are equal in their parameters, varying only in their names.

```zenscript
//mods.tconstruct.Casting.addTableRecipe(IItemStack output, IIngredient cast, ILiquidStack fluid, int amount, @Optional boolean consumeCast, @Optional int time);
mods.tconstruct.Casting.addTableRecipe(<minecraft:gold_ingot>, <minecraft:gold_ingot>, <liquid:molten_gold>, 140);
mods.tconstruct.Casting.addTableRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <liquid:molten_gold>, 30, true);
mods.tconstruct.Casting.addTableRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <liquid:molten_gold>, 30, true, 200);


//mods.tconstruct.Casting.addBasinRecipe(IItemStack output, IIngredient cast, ILiquidStack fluid, int amount, @Optional boolean consumeCast, @Optional int time);
mods.tconstruct.Casting.addBasinRecipe(<minecraft:gold_ingot>, <minecraft:gold_ingot>, <liquid:molten_gold>, 140);
mods.tconstruct.Casting.addBasinRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <liquid:molten_gold>, 30, true);
mods.tconstruct.Casting.addBasinRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <liquid:molten_gold>, 30, true, 200);
```

## 鋳造レシピを削除しています

レシピの削除は、テーブルや盆地を鋳造することもできます。

```zenscript
//mods.tconstruct.Casting.removeTableRecipe(IItemStack output);
mods.tconstruct.Casting.removeTableRecipe(<minecraft:iron_ingot>);

//mods.tconstruct.Casting.removeTableRecipe(IItemStack output, ILiquidStack input);
mods.tconstruct.Casting.removeTableRecipe(<minecraft:iron_ingot>, <liquid:molten_iron>);



//mods.tconstruct.Casting.removeBasinRecipe(IItemStack output);
mods.tconstruct.Casting.removeBasinRecipe(<minecraft:gold_block>);

//mods.tconstruct.Casting.removeBasinRecipe(IItemStack output, ILiquidStack input);
mods.tconstruct.Casting.removeBasinRecipe(<minecraft:gold_block>, <liquid:molten_gold>);
```