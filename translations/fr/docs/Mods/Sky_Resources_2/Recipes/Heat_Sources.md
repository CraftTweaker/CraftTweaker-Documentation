# Heat Sources

The *heatsources* package is used for adding or removing Heat Sources for certain machines/processes.

**Note: These functions only work for items that have a block form!**

## Calling

You can call the *heatsources* package using `mods.skyresources.heatsources`

## Heat Source Addition

    //mods.skyresources.heatsources.add(IItemStack stack, int heatValue);
    mods.skyresources.heatsources.add(<minecraft:ice>, 3);
    

## Heat Source Removal

    //mods.skyresources.heatsources.remove(IItemStack output);
    mods.skyresources.heatsources.remove(<minecraft:obsidian>);