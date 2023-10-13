# BuildCraft Support
## Handlers Supported
The following handlers are supported:

* Assembly Table
* Combustion Engine
* Integration Table
* Refinery
Each of these handlers can have recipes added or removed:
```
Parameters with '@Optional' are optional and can be left out

//Assembly Table
//OutputStack, InputRF, InputArray
mods.buildcraft.AssemblyTable.addRecipe(<BuildCraft|Transport:pipePlug>, 5000, [<minecraft:gravel>, <minecraft:cobblestone> * 2, <minecraft:glass>]);
//OutputStack, @Optional InputArray, @Optional isWildcard
mods.buildcraft.AssemblyTable.removeRecipe(<BuildCraft|Silicon:redstoneChipset>, [<minecraft:redstone>], false);

//Combustion Engine
//InputFluid, OutputRF per Cycle, BurningTime in Ticks
mods.buildcraft.Fuels.addCombustionEngineFuel(<liquid:lava>, 5000, 200);
//InputFluid
mods.buildcraft.Fuels.removeCombustionEngineFuel(<liquid:fuel);
//InputFluid, OutputCooling by mB
mods.buildcraft.Fuels.addCombustionEngineCoolant(<liquid:oil>, 100);
//InputStack, OutputFluid
mods.buildcraft.Fuels.addCoolantItem(<minecraft:ice>, <liquid:water> * 1000);
//InputStack, OutputFluid, Multiplier
mods.buildcraft.Fuels.addCoolantItemWithMultiplier(<minecraft:packed_ice>, <liquid:water> * 4000, 2);
//InputFluid
mods.buildcraft.Fuels.removeCombustionEngineCoolant(<liquid:water);
//InputStack
mods.buildcraft.Fuels.removeCoolantItem(<minecraft:water_bucket>);

//Integration Table
//W.I.P

//Refinery
//OutputFluid, RF per mB, Ticks per mB, InputFluid1, @Optional InputFluid2
mods.buildcraft.Refinery.addRecipe(<liquid:oil> * 2, 25, 25, <liquid:water>, <liquid:lava>);
//OutputFluid
mods.buildcraft.Refinery.removeRecipe(<liquid:fuel);
```