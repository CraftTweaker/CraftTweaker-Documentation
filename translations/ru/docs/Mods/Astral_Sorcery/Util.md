# Util

The utils package allows you to retrieve a given [IIngredient](/Vanilla/Variable_Types/IIngredient/) from parameters provided.

## Importing the package

If you ever find yourself needing an import for this, here's your chance:

    import mods.astralsorcery.Utils;
    

## Get a Crystal Ingredient

This will return you an ingredient matching all befitting AS crystals.

    //Utils.getCrystalORIngredient(boolean hasToBeCelestial, boolean hasToBeAttuned);
    
    val myCrystal = Utils.getCrystalORIngredient(true, true); //as crafttweaker.item.IIngredient