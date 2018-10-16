# Overrides

The Overrides package is used for adding/removing recipes from/to the melter Overrides.

## Calling

You can call the Overrides package using `mods.tcomplement.Overrides`

## Overrides entry addition

    //mods.tcomplement.Overrides.addRecipe(ILiquidStack output, IItemStack input, @Optional int temp);
    mods.tcomplement.Overrides.addRecipe(<liquid:gold> * 100, <minecraft:gold_ingot>);
    mods.tcomplement.Overrides.addRecipe(<liquid:gold> * 100, <minecraft:gold_ingot>, 1000);
    

## Overrides entry removal

    //mods.tcomplement.Overrides.removeRecipe(ILiquidStack output, @Optional IItemStack input);
    mods.tcomplement.Overrides.removeRecipe(<liquid:gold>);
    mods.tcomplement.Overrides.removeRecipe(<liquid:gold>, <minecraft:gold_ore>);