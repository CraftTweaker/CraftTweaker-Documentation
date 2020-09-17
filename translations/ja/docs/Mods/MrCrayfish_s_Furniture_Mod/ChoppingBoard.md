# チョッピングボード

チョッピングボードでは、他のアイテムの多くの部分にアイテムを切り分けることができます。

デフォルトでは、パンを 6 つのパンスライスにのみカットします。

## チョッピングレシピの削除

## 一致するチョッピングレシピを削除します。

```zenscript
mods.cfm.ChoppingBoard.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Remove recipe with bread as the input item
mods.cfm.ChoppingBoard.remove(null,<minecraft:bread>);
// Remove recipes that result in 6 bread slices (same match as above recipe, so will have no effect if used after)
mods.cfm.ChoppingBoard.remove(<cfm:item_bread_slice>.withAmount(6));
```

## チョッピングレシピの追加

チョッピングレシピを追加します。

## 入力にはスタックサイズが 1 である必要があります。

```zenscript
mods.cfm.ChoppingBoard.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack input);

// Add a recipe to chop wheat into 2 sticks
mods.cfm.ChoppingBoard.addRecipe(<minecraft:stick>.withAmount(2),<minecraft:wheat>);
// Add a recipe to chop bread into 3 wheat
mods.cfm.ChoppingBoard.addRecipe(<minecraft:wheat>.withAmount(3),<minecraft:bread>);
```