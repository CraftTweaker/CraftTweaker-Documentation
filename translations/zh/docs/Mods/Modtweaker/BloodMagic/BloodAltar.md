# Blood Altar

## Package

`mods.bloodmagic.BloodAlter`

## Addition

    //mods.bloodmagic.BloodAltar.addRecipe(IItemStack output, IItemStack input, int minimumTier, int syphon, int consumeRate, int drainRate);
    mods.bloodmagic.BloodAltar.addRecipe(<minecraft:glass>, <minecraft:stick>, 0, 20,30,40);
    

## Removal

    //mods.bloodmagic.BloodAltar.removeRecipe(IItemStack input);
    mods.bloodmagic.BloodAltar.removeRecipe(<minecraft:stone>);