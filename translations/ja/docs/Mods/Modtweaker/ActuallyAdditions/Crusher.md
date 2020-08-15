# クラッシャー

## パッケージ

`mods.actuallyadditions.Crusher`

## 加算

```zenscript
//mods.actuallyadditions.Crusher.addRecipe(IItemStack 出力, IItemStack 入力, @Optional IItemStack 出力Secondary, @Optional int outputSecondaryChance);
mods.actuallyadditions.Crusher.addRecipe(<minecraft:iron_ingot>, <minecraft:iron_ore>, <minecraft:stone>, 50);
```

## 削除

```zenscript
//mods.actuallyadditions.Crusher.removeRecipe(IItemStack output);
mods.actuallyadditions.Crusher.removeRecipe(<minecraft:gold_ore>);
```