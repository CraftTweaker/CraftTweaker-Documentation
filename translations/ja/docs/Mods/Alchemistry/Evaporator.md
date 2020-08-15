# Evaporator

# パッケージ
```zenscript
mods.alchemistry.EvaporatorEvaporator
```

## メソッド
**[IItemStack](/Vanilla/Items/IItemStack/) 出力** - レシピの出力。

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** - レシピの入力。


## 追加
```zenscript
mods.alchemistry.AtomizerEvaporator.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.mods.alchemistry.Evaporator.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Evaporator.addRecipe(<minecraft:stone>,<liquid:lava>*250);
```

## 削除
```zenscript
mods.alchemistry.Atomizermods.alchemistry.Evaporator.removeRecipe(ILiquidStack input); //Will work regardless of quantity
mods.alchemistry.Evaporator.removeRecipe(<liquid:milk>);

mods.alchemistry.Evaporator.removeAllRecipes();Evaporator.removeRecipe(<liquid:milk>);

mods.alchemistry.Evaporator.removeAllRecipes();
```
