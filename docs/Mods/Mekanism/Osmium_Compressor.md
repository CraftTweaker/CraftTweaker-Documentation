
# Osmium Compressor
Addition
------
```
mods.mekanism.compressor.addRecipe(IItemStack inputStack, @Optional IGasStack inputGas, IItemStack outputStack);

mods.mekanism.compressor.addRecipe(<mekanism:basicBlock:3>, <gas:liquidOsmium>, <minecraft:stone>);
mods.mekanism.compressor.addRecipe(<mekanism:basicBlock:1>, <minecraft:netherrack>);
```

Removal
------
```
mods.mekanism.compressor.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient inputGas);

mods.mekanism.compressor.removeRecipe(<mekanism:ingot>, <mekanism:otherDust:5>, <gas:liquidOsmium>);
mods.mekanism.compressor.removeRecipe(<minecraft:iron_block>);
```
Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.

Removing all recipes
------
As of Mekanism 9.7.0 it is now possible to remove all Osmium Compressor recipes. (This excludes any recipes added via CraftTweaker)
```
mods.mekanism.compressor.removeAllRecipes();
```