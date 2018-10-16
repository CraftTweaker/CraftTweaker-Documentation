# Pressure Chamber

The Pressure Chamber is a multiblock structure which uses compressed air to convert one or more input items into one or more output items. Pressure Chamber recipes have an associated pressure value, which is the air pressure in bar required to perform the conversion.

## Calling

You can call the Pressure Chamber package using `mods.pneumaticcraft.pressurechamber`.

## Removing

This function removes the first recipe it finds with the given [IItemStack](/Vanilla/Items/IItemStack/) `outputs` array:

    mods.pneumaticcraft.pressurechamber.removeRecipe(IItemStack[] outputs);
    // Example
    mods.pneumaticcraft.pressurechamber.removeRecipe([<pneumaticcraft:ingot_iron_compressed>]);
    

This function removes *all* Pressure Chamber recipes:

    mods.pneumaticcraft.pressurechamber.removeAllRecipes();
    

## Adding

This function is used to add new recipes to the Pressure Chamber:

    mods.pneumaticcraft.pressurechamber.addRecipe(IIngredient[] inputs, double pressure, IItemStack[] outputs);
    
    // Example
    mods.pneumaticcraft.pressurechamber.addRecipe([<minecraft:gold_ingot> * 2,<minecraft:apple>], 2.0, [<minecraft:golden_apple>]);