# Fluid Sieving Machine

### Importing

```zenscript
import mods.industrialforegoing.FluidSievingMachine;
```

### Adding

```zenscript
FluidSievingMachine.add(ILiquidStack fluidInput, IItemStack itemOutput, IItemStack sieveItemInput);
```

The first parameter is the input fluid. The second parameter is the output item. The third parameter is the input item used with the liquid.

The example shown below turns a piece of Cobblestone and 500mB of Blazing Pyrotheum into a piece of Obsidian:

```zenscript
FluidSievingMachine.add(<liquid:pyrotheum> * 500, <minecraft:obsidian>, <minecraft:cobblestone>);
```

### Removing

```zenscript
FluidSievingMachine.remove(IItemStack itemOutput);
```

Put the output item in the parameter to remove the recipe for that specific item:

Example:

```zenscript
FluidSievingMachine.remove(<minecraft:obsidian>);
```
