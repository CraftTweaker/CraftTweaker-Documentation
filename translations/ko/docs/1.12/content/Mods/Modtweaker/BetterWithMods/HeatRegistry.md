# HeatRegistry

The HeatRegistry allows assigning an integer value to a block that interacts with the Cauldron, Crucible and Kiln.

## Import
```zenscript
import mods.betterwithmods.HeatRegistry;
```

## Default Values
 * `Vanilla fire | 1`
 * `Stoked fire  | 2`

## Adding a Heat Source

```zenscript
// stack must have an asssociated block state.
mods.betterwithmods.HeatRegistry.addHeatSource(IItemStack stack, int heat);

mods.betterwithmods.HeatRegistry.addHeatSource(IBlockState stack, int heat);

// adds a list of stacks to be shown as one heat item in JEI
// e.g., blocks with multiple blockstates like campfires
mods.betterwithmods.HeatRegistry.addHeatSource(IBlockState[] stacks, IItemStack displayStack, int heat);
```
