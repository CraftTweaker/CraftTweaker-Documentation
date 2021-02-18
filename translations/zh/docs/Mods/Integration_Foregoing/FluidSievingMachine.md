# Fluid Sieving Machine

### 导入

```zenscript
import mods.industrialforegoing.FluidSievingMachine;
```

### 添加

The first parameter is the input fluid. The second parameter is the output item. The third parameter is the input item used with the liquid.

The example shown below turns a piece of Cobblestone and 500mB of Blazing Pyrotheum into a piece of Obsidian:

```zenscript
// FluidSievingMachine.add(ILiquidStack fluidInput, IItemStack itemOutput, IItemStack sieveItemInput);

FluidSievingMachine.add(<liquid:pyrotheum> * 500, <minecraft:obsidian>, <minecraft:cobblestone>);
```

### 移除配方

Put the output item in the parameter to remove the recipe for that specific item:

The example shown below removes the recipe for Obsidian:

```zenscript
// FluidSievingMachine.remove(IItemStack itemOutput);

FluidSievingMachine.remove(<minecraft:obsidian>);
```
