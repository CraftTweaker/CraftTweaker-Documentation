
# Chemical Oxidizer
Addition
------
```
mods.mekanism.chemical.oxidizer.addRecipe(IItemStack inputStack, IGasStack outputGas);

mods.mekanism.chemical.oxidizer.addRecipe(<mekanism:dust:2>, <gas:cleanOsmium>);
```

Removal
------
```
mods.mekanism.chemical.oxidizer.removeRecipe(IIngredient outputGas, @Optional IIngredient inputStack);

mods.mekanism.chemical.oxidizer.removeRecipe(<gas:brine>, <mekanism:salt>);
mods.mekanism.chemical.oxidizer.removeRecipe(<gas:lithium>);
```
Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.

Removing all recipes
------
As of Mekanism 9.7.0 it is now possible to remove all Chemical Oxidizer recipes. (This excludes any recipes added via CraftTweaker)
```
mods.mekanism.chemical.oxidizer.removeAllRecipes();
```