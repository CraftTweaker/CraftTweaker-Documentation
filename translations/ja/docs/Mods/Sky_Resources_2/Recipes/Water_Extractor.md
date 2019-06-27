# Water Extractor

The *waterextractor* package is used for adding or removing recipes to/from the Water Extractor Insert and Extract process.

## Calling

You can call the *waterextractor* package using `mods.skyresources.waterextractor`

## Recipe Addition

    //mods.skyresources.waterextractor.extract.addRecipe(int waterOut, IItemStack output, IIngredient input);
    mods.skyresources.waterextractor.extract.addRecipe(500, <minecraft:dirt>, <minecraft:leaves>);
    
    //mods.skyresources.waterextractor.insert.addRecipe(IItemStack output, IIngredient input, int waterIn);
    mods.skyresources.waterextractor.insert.addRecipe(<minecraft:dirt>, <minecraft:cobblestone>, 100);
    

## Recipe Removal

    //mods.skyresources.waterextractor.extract.removeRecipe(int waterOut, IItemStack output, IIngredient input);
    mods.skyresources.waterextractor.extract.removeRecipe(50, null, <minecraft:snow>);
    
    //mods.skyresources.waterextractor.insert.removeRecipe(IItemStack output);
    mods.skyresources.waterextractor.insert.removeRecipe(<minecraft:clay>);