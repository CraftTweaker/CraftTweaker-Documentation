# Chemical Injection Chamber

As of Mekanism 9.7.0 it is now possible to view all recipe strings of the Chemical Injection Chamber through the command `/ct mekrecipes injection`

## Addition

    mods.mekanism.chemical.injection.addRecipe(IIngredient inputStack, IGasStack inputGas, IItemStack outputStack);
    
    mods.mekanism.chemical.injection.addRecipe(<minecraft:hardened_clay:1>, <gas:water>, <minecraft:clay>);
    

As of Mekanism 9.7.0 inputGas is no longer restricted to just sulfuric acid, water, or hydrogen chloride

Also as of Mekanism 9.7.0 it is possible to use IIngredients as the inputStack instead of only IItemStacks.

Note: Currently all this does is loop over the different possibilities in java while adding instead of you having to do it in ZenScript. Currently there is no built in support for compound ingredients or oredictionary in the machines themselves.

## Removal

    mods.mekanism.chemical.injection.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient inputGas);
    
    mods.mekanism.chemical.injection.removeRecipe(<mekanism:shard:2>, <mekanism:oreblock>, <gas:hydrogenchloride>);
    mods.mekanism.chemical.injection.removeRecipe(<mekanism:shard:1>);
    

Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.

## Removing all recipes

As of Mekanism 9.7.0 it is now possible to remove all Chemical Injection Chamber recipes. (This excludes any recipes added via CraftTweaker)

    mods.mekanism.chemical.injection.removeAllRecipes();