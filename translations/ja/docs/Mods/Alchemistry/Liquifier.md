# Liquifier

# パッケージ
```zenscript
mods.alchemistry.LiquifierLiquifier
```

## メソッド
**[IItemStack](/Vanilla/Liquids/ILiquidStack/) output** - The output of the recipe.

**[IItemStack](/Vanilla/Items/IItemStack/) input** - The input of the recipe.

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
