# HeatRegistry

The HeatRegistry allows assigning an integer value to a block that interacts with the Cauldron, Crucible and Kiln.

* Default Values: Vanilla fire | 1 Stoked Fire | 2

# Adding a Heat Source

    //stack must have an asssociated block state.
    mods.betterwithmods.HeatRegistry.addHeatSource(IItemStack stack, int heat);
    
    mods.betterwithmods.HeatRegistry.addHeatSource(IBlockState stack, int heat);