
# Thermal Evaporation
Addition
------
```
mods.mekanism.thermalevaporation.addRecipe(ILiquidStack liquidInput, ILiquidStack liquidOutput);

mods.mekanism.thermalevaporation.addRecipe(<liquid:fusionfueldt>, <liquid:lava>);
```

Removal
------
```
mods.mekanism.thermalevaporation.removeRecipe(IIngredient liquidInput, @Optional IIngredient liquidOutput);

mods.mekanism.thermalevaporation.removeRecipe(<liquid:water>, <liquid:brine>);
mods.mekanism.thermalevaporation.removeRecipe(<liquid:lithium>);
```
Specifying an output parameter will only remove the specific recipe that results in that output from that input. Omitting the output parameter will remove all recipes that the input item can produce.

Removing all recipes
------
As of Mekanism 9.7.0 it is now possible to remove all Thermal Evaporation Plant recipes. (This excludes any recipes added via CraftTweaker)
```
mods.mekanism.thermalevaporation.removeAllRecipes();
```