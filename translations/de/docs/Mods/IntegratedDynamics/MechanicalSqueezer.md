# MechanicalSqueezer

This package allows you to modify recipes for the Mechanical Squeezer.

## Importing the package

If you want to import this package, here you go:

    import mods.integrateddynamics.MechanicalSqueezer;
    

## Adding Recipes

    //MechanicalSqueezer.addRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
    MechanicalSqueezer.addRecipe(<minecraft:melon>, <minecraft:stick>, <liquid:water> * 100, 10);
    
    
    
    //MechanicalSqueezer.addRecipe(IItemStack inputStack, 
    //  @Optional IItemStack outputStack1, @Optional float outputStackChance1,
    //  @Optional IItemStack outputStack2, @Optional float outputStackChance2,
    //  @Optional IItemStack outputStack3, @Optional float outputStackChance3,
    //  @Optional ILiquidStack outputFluid, @Optional(10) int duration);
    
    MechanicalSqueezer.addRecipe(<minecraft:pumpkin>, 
        <minecraft:pumpkin_seeds>, 0.2,
        <minecraft:iron_nugget>, 0.01,
        <minecraft:cactus>, 0.5,
        <liquid:water> * 100, 20);
    

## Removing Recipes

    //MechanicalSqueezer.removeRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
    MechanicalSqueezer.removeRecipe(<minecraft:melon>, <minecraft:stick>, <liquid:water> * 100, 10);
    
    //MechanicalSqueezer.removeRecipe(IItemStack inputStack,
    //  @Optional IItemStack outputStack1, @Optional float outputStackChance1,
    //  @Optional IItemStack outputStack2, @Optional float outputStackChance2,
    //  @Optional IItemStack outputStack3, @Optional float outputStackChance3,
    //  @Optional ILiquidStack outputFluid, @Optional(10) int duration);
    
    MechanicalSqueezer.removeRecipe(<minecraft:pumpkin>, 
        <minecraft:pumpkin_seeds>, 0.2,
        <minecraft:iron_nugget>, 0.01,
        <minecraft:cactus>, 0.5,
        <liquid:water> * 100, 20)
    
    
    
    //MechanicalSqueezer.removeRecipesWithOutput(@Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
    //TODO
    
    //MechanicalSqueezer.removeRecipesWithOutput(@Optional IItemStack outputStack1, @Optional float outputStackChance1,
    //  @Optional IItemStack outputStack2, @Optional float outputStackChance2,
    //  @Optional IItemStack outputStack3, @Optional float outputStackChance3,
    //  @Optional ILiquidStack outputFluid);
    
    MechanicalSqueezer.removeRecipesWithOutput(<minecraft:pumpkin_seeds>, 0.2,
        <minecraft:iron_nugget>, 0.01,
        <minecraft:cactus>, 0.5,
        <liquid:water> * 100, 20);