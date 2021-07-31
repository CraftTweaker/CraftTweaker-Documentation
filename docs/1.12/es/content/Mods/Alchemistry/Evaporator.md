# Evaporator

# Package
```zenscript
mods.alchemistry.EvaporatorEvaporator
```

## Methods
**[IItemStack](/Vanilla/Items/IItemStack/) output** - The output of the recipe.

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** - The input of the recipe.


## Suma
```zenscript
mods.alchemistry.AtomizerEvaporator.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.mods.alchemistry.Evaporator.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Evaporator.addRecipe(<minecraft:stone>,<liquid:lava>*250);
```

## Removal
```zenscript
mods.alchemistry.Atomizermods.alchemistry.Evaporator.removeRecipe(ILiquidStack input); //Will work regardless of quantity
mods.alchemistry.Evaporator.removeRecipe(<liquid:milk>);

mods.alchemistry.Evaporator.removeAllRecipes();Evaporator.removeRecipe(<liquid:milk>);

mods.alchemistry.Evaporator.removeAllRecipes();
```
