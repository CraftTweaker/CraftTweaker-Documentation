
# Combiner
Addition
------
```
mods.mekanism.combiner.addRecipe(IItemStack itemInput, @Optional IItemStack extraInput, IItemStack itemOutput);

mods.mekanism.combiner.addRecipe(<minecraft:stone> * 4, <minecraft:cobblestone>, <minecraft:stonebrick>);
mods.mekanism.combiner.addRecipe(<minecraft:torch> * 4, <minecraft:stick>);
```

Removal
------
```
mods.mekanism.combiner.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient inputGas);

mods.mekanism.combiner.removeRecipe(<minecraft:gravel>, <minecraft:flint>, <gas:liquidStone>);
mods.mekanism.combiner.removeRecipe(<minecraft:iron_ore>);
```
Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.

Removing all recipes
------
As of Mekanism 9.7.0 it is now possible to remove all Combiner recipes. (This excludes any recipes added via CraftTweaker)
```
mods.mekanism.combiner.removeAllRecipes();
```