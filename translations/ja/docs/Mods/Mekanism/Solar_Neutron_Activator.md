# Solar Neutron Activator

As of Mekanism 9.7.0 it is now possible to view all recipe strings of the Solar Neutron Activator through the command `/ct mekrecipes solarneutronactivator`

## Addition

    mods.mekanism.solarneutronactivator.addRecipe(IGasStack gasInput, IGasStack gasOutput);
    
    mods.mekanism.solarneutronactivator.addRecipe(<gas:sulfurdioxide>, <gas:sulfurtrioxide>);
    

## Removal

    mods.mekanism.solarneutronactivator.removeRecipe(IIngredient gasInput, @Optional IIngredient gasOutput);
    
    mods.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>, <gas:tritium>);
    mods.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>);
    

Specifying an output parameter will only remove the specific recipe that results in that output from that input. Omitting the output parameter will remove all recipes that the input item can produce.

## Removing all recipes

As of Mekanism 9.7.0 it is now possible to remove all Solar Neutron Activator recipes. (This excludes any recipes added via CraftTweaker)

    mods.mekanism.solarneutronactivator.removeAllRecipes();