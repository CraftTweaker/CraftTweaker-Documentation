# Freezer

The *freezer* package is used for adding or removing recipes to/from the Freezer.

## Calling

You can call the *freezer* package using `mods.skyresources.freezer`

## Recipe Addition

    //mods.skyresources.freezer.addRecipe(IItemStack output, IItemStack input, int ticks);
    mods.skyresources.freezer.addRecipe(<minecraft:ice>, <minecraft:dirt>, 900);
    

## Recipe Removal

    //mods.skyresources.freezer.removeRecipe(IItemStack output);
    mods.skyresources.freezer.removeRecipe(<minecraft:ice>);