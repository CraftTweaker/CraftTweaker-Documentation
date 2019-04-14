
# Combiner
Addition
------
```
mods.mekanism.combiner.addRecipe(IIngredient itemInput, @Optional IIngredient extraInput, IItemStack itemOutput);

mods.mekanism.combiner.addRecipe(<minecraft:stone> * 4, <minecraft:cobblestone>, <minecraft:stonebrick>);
mods.mekanism.combiner.addRecipe(<minecraft:torch> * 4, <minecraft:stick>);
```
As of Mekanism 9.7.0 it is possible to use IIngredients as the itemInput and extraInput instead of only IItemStacks.

Note: Currently all this does is loop over the different possibilities in java while adding instead of you having to do it in ZenScript. Currently there is no built in support for compound ingredients or oredictionary in the machines themselves.

Removal
------
```
mods.mekanism.combiner.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient extraInput);

mods.mekanism.combiner.removeRecipe(<minecraft:gravel>, <minecraft:flint>, <minecraft:cobblestone>);
mods.mekanism.combiner.removeRecipe(<minecraft:iron_ore>);
```
Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.

Removing all recipes
------
As of Mekanism 9.7.0 it is now possible to remove all Combiner recipes. (This excludes any recipes added via CraftTweaker)
```
mods.mekanism.combiner.removeAllRecipes();
```