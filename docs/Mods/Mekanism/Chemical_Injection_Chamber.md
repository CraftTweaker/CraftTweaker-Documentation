
# Chemical Injection Chamber
Addition
------
```
mods.mekanism.chemical.injection.addRecipe(IItemStack inputStack, IGasStack inputGas, IItemStack outputStack);

mods.mekanism.chemical.injection.addRecipe(<minecraft:hardened_clay:1>, <gas:water>, <minecraft:clay>);
```
As of Mekanism 9.7.0 inputGas is no longer restricted to just sulfuric acid, water, or hydrogen chloride


Removal
------
```
mods.mekanism.chemical.injection.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient inputGas);

mods.mekanism.chemical.injection.removeRecipe(<mekanism:shard:2>, <mekanism:oreblock>, <gas:hydrogenchloride>);
mods.mekanism.chemical.injection.removeRecipe(<mekanism:shard:1>);
```
Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.

Removing all recipes
------
As of Mekanism 9.7.0 it is now possible to remove all Chemical Injection Chamber recipes. (This excludes any recipes added via CraftTweaker)
```
mods.mekanism.chemical.injection.removeAllRecipes();
```