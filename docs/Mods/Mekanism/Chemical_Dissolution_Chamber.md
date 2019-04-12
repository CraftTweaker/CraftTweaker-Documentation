
# Chemical Dissolution Chamber
Addition
------
```
mods.mekanism.chemical.dissolution.addRecipe(IItemStack inputStack, IGasStack outputGas);

mods.mekanism.chemical.dissolution.addRecipe(<minecraft:ice>, <gas:water>);
```

Removal
------
```
mods.mekanism.chemical.dissolution.removeRecipe(IIngredient outputGas, @Optional IIngredient inputStack);

mods.mekanism.chemical.dissolution.removeRecipe(<gas:osmium>, <mekanism:oreBlock>);
mods.mekanism.chemical.dissolution.removeRecipe(<gas:water>);
```
Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.

Removing all recipes
------
As of Mekanism 9.7.0 it is now possible to remove all Chemical Dissolution Chamber recipes. (This excludes any recipes added via CraftTweaker)
```
mods.mekanism.chemical.dissolution.removeAllRecipes();
```