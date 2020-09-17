# Liquifier

# パッケージ
```zenscript
mods.alchemistry.LiquifierLiquifier
```

## メソッド
**[IItemStack](/Vanilla/Liquids/ILiquidStack/) 出力** - レシピの出力。

**[IItemStack](/Vanilla/Items/IItemStack/) input** - レシピの入力。

## 追加
```zenscript
mods.alchemistry.AtomizerLiquifier.addRecipe(ILiquidStack output, IItemStack input);
mods.alchemistry.mods.alchemistry.Liquifier.addRecipe(ILiquidStack output, IItemStack input);
mods.alchemistry.Liquifier.addRecipe(<liquid:beryllium>*100,<alchemistry:element:5>);
```

## 削除
```zenscript
mods.alchemistry.Atomizermods.alchemistry.Liquifier.removeRecipe(IItemStack input);

mods.alchemistry.Liquifier.removeAllRecipes();Liquifier.removeAllRecipes();
```
