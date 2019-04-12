
# Energized Smelter
Addition
------
```
mods.mekanism.smelter.addRecipe(IItemStack inputStack, IItemStack outputStack);

mods.mekanism.smelter.addRecipe(<minecraft:tallgrass:1>, <minecraft:deadbush>);
```

Removal
------
```
mods.mekanism.smelter.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack);

mods.mekanism.smelter.removeRecipe(<minecraft:sand>, <minecraft:glass>);
mods.mekanism.smelter.removeRecipe(<minecraft:cobblestone>);
```
Specifying an output parameter will only remove the specific recipe that results in that output from that input. Omitting the output parameter will remove all recipes that the input item can produce.

Removing all recipes
------
As of Mekanism 9.7.0 it is now possible to remove all Energized Smelter recipes. (This excludes any recipes added via CraftTweaker)
```
mods.mekanism.smelter.removeAllRecipes();
```