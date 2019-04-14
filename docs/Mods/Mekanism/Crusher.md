
# Crusher
Addition
------
```
mods.mekanism.crusher.addRecipe(IIngredient inputStack, IItemStack outputStack);

mods.mekanism.crusher.addRecipe(<minecraft:double_plant:4>, <minecraft:dye:1> * 5);
```
As of Mekanism 9.7.0 it is possible to use IIngredients as the inputStack instead of only IItemStacks.

Note: Currently all this does is loop over the different possibilities in java while adding instead of you having to do it in ZenScript. Currently there is no built in support for compound ingredients or oredictionary in the machines themselves.

Removal
------
```
mods.mekanism.crusher.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack);

mods.mekanism.crusher.removeRecipe(<minecraft:sand>, <minecraft:gravel>);
mods.mekanism.crusher.removeRecipe(<minecraft:gravel>);
```
Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.

Removing all recipes
------
As of Mekanism 9.7.0 it is now possible to remove all Crusher recipes. (This excludes any recipes added via CraftTweaker)
```
mods.mekanism.crusher.removeAllRecipes();
```