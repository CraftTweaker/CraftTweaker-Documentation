# 元合金

## パッケージ

`import mods.ic2.MetalFormer;`

## メソッド

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) の入力**

## カットレシピを追加

```zenscript
mods.ic2.MetalFormer.addCuttingRecipe(IItemStack 出力, IIngredient input);

mods.ic2.MetalFormer.addCuttingRecipe(<minecraft:diamond>, <minecraft:dirt> * 64);
```

## カットレシピを削除

- If using Ic2 Experimental, to remove a recipe, simply remove the corresponding line in `config/ic2/metal_former_cutting.ini`.
- Ic2 Classic と Ic2c Extras を使用している場合、レシピを削除するには、 `config/ic2/ic2machineRecipes.json` 内の対応するレシピを無効にしてください。

## 押し出しレシピを追加

```zenscript
mods.ic2.MetalFormer.addExtrudingRecipe(IItemStack output, IIngredient input);

mods.ic2.MetalFormer.addExtrudingRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## 押し出しレシピを削除

- If using Ic2 Experimental, to remove a recipe, simply remove the corresponding line in `config/ic2/metal_former_extruding.ini`.
- Ic2 Classic と Ic2c Extras を使用している場合、レシピを削除するには、 `config/ic2/ic2machineRecipes.json` 内の対応するレシピを無効にしてください。

## ロールレシピを追加

```zenscript
mods.ic2.MetalFormer.addRollingRecipe(IItemStack 出力, IIngredient input);

mods.ic2.MetalFormer.addRollingRecipe(<minecraft:diamond>, <minecraft:dirt> * 32);
```

## ロールレシピを削除

- Ic2 Experimental を使用してレシピを削除する場合は、config/ic2/metal_former_rolling.ini の `該当する行を削除してください`
- Ic2 Classic と Ic2c Extras を使用している場合、レシピを削除するには、 `config/ic2/ic2machineRecipes.json` 内の対応するレシピを無効にしてください。