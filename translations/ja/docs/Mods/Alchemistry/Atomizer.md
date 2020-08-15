# Atomizer

# パッケージ
```zenscript
mods.alchemistry.AtomizerAtomizer
```

## メソッド
**[IItemStack](/Vanilla/Items/IItemStack/) output** - The output of the recipe.

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** - The input of the recipe.


## 追加
```zenscript
mods.alchemistry.AtomizerAtomizer.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.mods.alchemistry.Atomizer.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Atomizer.addRecipe(<minecraft:redstone>,<liquid:beryllium>*500);
```

## 削除
```zenscript
mods.alchemistry.Atomizermods.alchemistry.Atomizer.removeRecipe(ILiquidStack input); //Will work regardless of quantity

mods.alchemistry.Atomizer.removeRecipe(<liquid:iron>);
mods.alchemistry.Atomizer.removeAllRecipes();Atomizer.removeRecipe(<liquid:iron>);
mods.alchemistry.Atomizer.removeAllRecipes();
```
