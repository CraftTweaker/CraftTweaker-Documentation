# Microwave

マイクロ波は食料品を加熱します

## 既定のマイクロ波レシピ

- 牛肉->焼いた肉
- ポテト->ベイクドポテト

## 削除中

## 一致するマイクロ波レシピを削除します。

```zenscript
mods.cfm.Microwave.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Remove recipes that require a Potato
mods.cfm.Microwave.remove(null,<minecraft:potato>);
// Remove recipes that result in Cooked Beef
mods.cfm.Microwave.remove(<minecraft:cooked_beef>);
// Remove all recipes
mods.cfm.Microwave.remove();
```

## 追加中

## マイクロ波レシピを追加します。

```zenscript
mods.cfm.Microwave.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack input);

// Add a recipe that makes a 4 sticks from one sugar cane
mods.cfm.Microwave.addRecipe(<minecraft:stick>.withAmount(4),<minecraft:reeds>);
```