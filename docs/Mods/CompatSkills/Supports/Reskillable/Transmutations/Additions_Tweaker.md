# Addition Tweaker

## ZenMethod List:
```
// Adds a Blockstate > Blockstate transmutation to the specified Itemstack Reagent.
mods.compatskills.transmutations.additions.addEntryToReagent(IItemStack reagent, IItemStack startState, IItemStack endState);
mods.compatskills.transmutations.additions.addEntryToReagent(IItemStack reagent, crafttweaker.api.block.IBlockState state1, crafttweaker.api.block.IBlockState state2);

// Adds a Blockstate > Blockstate Transmutation regardless of a specific reagent.
// This means it will add this Transmutation to any already available reagent in the Transmutation Map.
mods.compatskills.transmutations.additions.addEntryToReagentAgnostic(IItemStack startState, IItemStack endState);
mods.compatskills.transmutations.additions.addEntryToReagentAgnostic(crafttweaker.api.block.IBlockState state1, crafttweaker.api.block.IBlockState state2);
```