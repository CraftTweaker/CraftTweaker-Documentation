# Grill

グリルは熱い石炭の上で食べ物を調理します。

それは両側を調理するために食べ物をひっくり返す必要があります。

## デフォルトのグリルレシピ

- 牛肉->焼いた肉
- ソーセージ->焼いたソーセージ。
- ケバブ->焼いたケバブ。

## 削除中

## 一致するグリルのレシピを削除します

```zenscript
mods.cfm.Grill.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Remove recipes that require Beef
mods.cfm.Grill.remove(null,<minecraft:beef>);
// Remove recipes that result in a Cooked Sausage
mods.cfm.Grill.remove(<cfm:item_sausage_cooked>);
// Remove all recipes
mods.cfm.Grill.remove();
```

## 追加中

グリルレシピを追加します。

## サイズ1の入力のみをサポートします。

```zenscript
mods.cfm.Grill.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack input);

// Add a recipe that makes a Stick from a Sausage
mods.cfm.Grill.addRecipe(<minecraft:stick>,<cfm:item_sausage>);
// Add a recipe that makes a Torch from a Stick
mods.cfm.Grill.addRecipe(<minecraft:torch>,<minecraft:stick>);
```