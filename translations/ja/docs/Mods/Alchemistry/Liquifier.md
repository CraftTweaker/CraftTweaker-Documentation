# Liquifier

# Package
```zenscript
mods.alchemistry.Liquifier
```

## Methods
**[IItemStack](/Vanilla/Liquids/ILiquidStack/) output** - The output of the recipe.

**[IItemStack](/Vanilla/Items/IItemStack/) input** - The input of the recipe.

## 追加
```zenscript
mods.alchemistry.Liquifier.addRecipe(ILiquidStack output, IItemStack input);
mods.alchemistry.Liquifier.addRecipe(<liquid:beryllium>*100,<alchemistry:element:5>);
```

## 削除
```zenscript
mods.alchemistry.Liquifier.removeRecipe(IItemStack input);

mods.alchemistry.Liquifier.removeAllRecipes();
```
