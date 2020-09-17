# 化学結合器

# パッケージ
```zenscript
mods.alchemistry.Combiner組み合わせ
```

## メソッド
- **[IItemStack](/Vanilla/Items/IItemStack/) 出力** - レシピの出力。

- **[IItemStack](/Vanilla/Items/IItemStack/)[] input** - レシピの入力。


## 追加
```zenscript
mods.alchemistry.AtomizerCombiner.addRecipe(IItemStack output, IItemstack[] input);
mods.alchemistry.mods.alchemistry.Combiner.addRecipe(IItemStack output, IItemstack[] input);
mods.alchemistry.Combiner.addRecipe(<minecraft:redstone>,
    [<alchemistry:element:5>,<alchemistry:element:5>,null,
     <alchemistry:element:5>]);
```

## 削除
```zenscript
mods.alchemistry.AtomizerCombiner.removeRecipe(IItemStack output);
mods.alchemistry.mods.alchemistry.Combiner.removeRecipe(IItemStack output);
mods.alchemistry.Combiner.removeRecipe(<minecraft:gold_ingot>);

mods.alchemistry.Combiner.removeAllRecipes();Combiner.removeAllRecipes();
```


# ゲームステージの統合

## 新しいレシピ
```zenscript
mods.alchemistry.Atomizermods.alchemistry.Combiner.addStagedRecipe(IItemStack output, IItemstack[] input, String stage);
```

## 既存のレシピ

```zenscript
mods.alchemistry.Atomizermods.alchemistry.Combiner.setAsStaged(IItemStack output, String stage);
```
