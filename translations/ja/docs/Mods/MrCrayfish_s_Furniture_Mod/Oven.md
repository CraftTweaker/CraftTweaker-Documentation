# Microwave

マイクロ波は食料品を加熱します

## 既定のマイクロ波レシピ

- 牛肉->焼いた肉
- ポークチョップ->ポークチョップ
- ポテト->ベイクドポテト
- ニワトリ->焼き鳥
- 魚 -> 焼いた魚
- サーモン->サーモンを焼いた
- 肉 -> 焼いた肉

## 削除中

## 一致するオーブンレシピを削除します。

```zenscript
mods.cfm.Oven.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Remove recipes that result in Cooked Flesh
mods.cfm.Oven.remove(<cfm:item_flesh_cooked>);
// Remove recipes that require a Potato
mods.cfm.Oven.remove(null,<minecraft:potato>);
// Remove all recipes
mods.cfm.Oven.remove();
```

## 追加中

## オーブンレシピを追加します。

```zenscript
mods.cfm.Oven.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack input);

// Add a recipe that makes two apples from one stick
mods.cfm.Oven.addRecipe(<minecraft:apple>.withAmount(2),<minecraft:stick>);
```