# Removal Tweaker

## ZenMethod List:
```
// Removes the Entry corresponding to the Starting State from the specified Reagent
mods.compatskills.transmutations.removals.removeStartStateFromReagent(IItemStack reagent, IItemStack startState)
mods.compatskills.transmutations.removals.removeStartStateFromReagent(IItemStack reagent, crafttweaker.api.block.IBlockState state)

// Removes the Entry corresponding to the Starting State from ALL Reagents!
mods.compatskills.transmutations.removals.removeStartStateReagentAgnostic(IItemStack state)
mods.compatskills.transmutations.removals.removeStartStateReagentAgnostic(crafttweaker.api.block.IBlockState state)

// Removes the Entry corresponding to the End State from the specified Reagent.
mods.compatskills.transmutations.removals.removeEndStateFromReagent(IItemStack reagent, IItemStack state)
mods.compatskills.transmutations.removals.removeEndStateFromReagent(IItemStack reagent, crafttweaker.api.block.IBlockState state)

// Removes the Entry corresponding to the End State from ALL Reagents!
mods.compatskills.transmutations.removals.removeEndStateReagentAgnostic(IItemStack state)
mods.compatskills.transmutations.removals.removeEndStateReagentAgnostic(crafttweaker.api.block.IBlockState state)
```