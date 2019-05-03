# Cutting Knife

The *knife* package is used for adding or removing recipes to/from the Cutting Knife.

## Calling

You can call the *knife* package using `mods.skyresources.knife`

## Recipe Addition

    //mods.skyresources.knife.addRecipe(IItemStack output, IItemStack input);
    mods.skyresources.knife.addRecipe(<minecraft:diamond>, <minecraft:stone>);
    

## Recipe Removal

    //mods.skyresources.knife.removeRecipe(IItemStack output);
    mods.skyresources.knife.removeRecipe(<minecraft:melon>);