# Moistener

ModTweakerを使用すると、森林保湿レシピを追加または削除できます。

## 発信中

You can call the package using `mods.forestry.Moistener`

## レシピの削除

```zenscript
//mods.forestry.Moistener.removeRecipe(IIngredient output);
mods.forestry.Moistener.removeRecipe(<minecraft:stonebrick:1>);
```

## 加算

```zenscript
//mods.forestry.Moistener.addRecipe(IItemStack 出力, IItemStack input, int packagingTime); 
mods.forestry.Moistener.addRecipe(<minecraft:mycelium>, <minecraft:grass>, 60); 
```

## 燃料除去

```zenscript
//mods.forestry.Moistener.removeFuel(IIngredient moistenerItem);
mods.forestry.Moistener.removeFuel(<minecraft:wheat>);

```

## 燃料の追加

```zenscript
//mods.forestry.Moistener.addFuel(IItemStack item, IItemStack product, int moistenerValue, int stage);
mods.forestry.Moistener.addFuel(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 20, 2);
```

| パラメータ          | タイプ                                      | 説明                                 |
| -------------- | ---------------------------------------- | ---------------------------------- |
| 項目             | [IItemStack](/Vanilla/Items/IItemStack/) | アイテムがモイステナーに有効な燃料になる               |
| 商品             | [IItemStack](/Vanilla/Items/IItemStack/) | 保湿者の作業スロットを残すアイテム(例えば、成形小麦やマルチ)。   |
| MoistenerValue | int                                      | このアイテムが保湿剤の最終製品にどれだけ貢献するか。         |
| ステージ           | int                                      | この製品が表すステージ。 ステージ値が低い資源は最初に消費されます。 |