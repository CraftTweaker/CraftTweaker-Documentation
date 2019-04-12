
# Pressurised Reaction Chamber
Addition
------
```
mods.mekanism.reaction.addRecipe(IItemStack itemInput, ILiquidStack liquidInput, IGasStack gasInput, IItemStack itemOutput, IGasStack gasOutput, double energy, int duration);

mods.mekanism.reaction.addRecipe(<mekanism:polyethene>, <liquid:ethene>, <gas:oxygen>, <mekanism:polyethene> * 8, <gas:oxygen>, 50000, 2000);
```

Removal
------
```
mods.mekanism.reaction.removeRecipe(IIngredient itemOutput, IIngredient gasOutput, @Optional IIngredient itemInput, @Optional IIngredient liquidInput, @Optional IIngredient gasInput);

mods.mekanism.reaction.removeRecipe(<mekanism:substrate>, <gas:ethene>, <mekanism:bioFuel>, <liquid:water>, <gas:hydrogen>);
mods.mekanism.reaction.removeRecipe(<mekanism:polyethene>, <gas:oxygen>);
```
Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.

Removing all recipes
------
As of Mekanism 9.7.0 it is now possible to remove all Pressurised Reaction Chamber recipes. (This excludes any recipes added via CraftTweaker)
```
mods.mekanism.reaction.removeAllRecipes();
```