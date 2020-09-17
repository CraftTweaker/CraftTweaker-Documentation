# トースター

トースターはあなたの一日を始めるために食べ物をクリップアップします。

## デフォルトのトースターレシピ

- 牛肉->焼いた肉
- ソーセージ->焼いたソーセージ。
- ケバブ->焼いたケバブ。

## 削除中

## 一致するトースターのレシピを削除

```zenscript
mods.cfm.Toaster.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Remove recipes that make Toast from a Bread Slice
mods.cfm.Toaster.remove(<cfm:item_toast>,<cfm:item_bread_slice>);
// Remove all recipes
mods.cfm.Toaster.remove();
```

## 追加中

トースターのレシピを追加します。

## サイズ1の入力のみをサポートします。

```zenscript
mods.cfm.Toaster.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack input);

// Add a recipe that makes Bread from Wheat
mods.cfm.Toaster.addRecipe(<minecraft:bread>,<minecraft:wheat>);
// Add a recipe that makes Cooked Beef from Beef
mods.cfm.Toaster.addRecipe(<minecraft:cooked_beef>,<minecraft:beef>);
```