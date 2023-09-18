# Immersive Engineering Support
## Handlers Supported
The following handlers are supported:

* Arc Furnace
* Blast Furnace
* Bottling Machine
* Coke Oven
* Crusher
* Excavator
* Fermenter
* Metal Press
* Refinery
* Squeezer
Each of these handlers can have recipes added or removed:

```zenscript
Parameters with '@Optional' are optional and can be left out

//Arc Furnace
//OutputStack, InputStack, SlagOutput, Time in Ticks, Energy per Tick, @Optional AdditiveArray, @Optional RecipeTypeString //Either create your own NEI pages with custom strings or use original ones
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:gravel>, <minecraft:dirt> * 9, <ImmersiveEngineering:material:13>, 4600, 3600, [<ImmersiveEngineering:fluidContainers:4>], "Purifying");
//OutputStack
mods.immersiveengineering.ArcFurnace.removeRecipe(<ImmersiveEngineering:metal:7>);

//Blast Furnace
//Smelting
//OutputStack, InputStack, Time in Ticks, @Optional SlagOutput
mods.immersiveengineering.BlastFurnace.addRecipe(<ImmersiveEngineering:material:12>, <ImmersiveEngineering:material:11>, 4800, <ImmersiveEngineering:material:13>);
//OutputStack
mods.immersiveengineering.BlastFurnace.removeRecipe(<ImmersiveEngineering:metal:7>);
//Fuel
//InputStack, Time in Ticks
mods.immersiveengineering.BlastFurnace.addFuel(<ImmersiveEngineering:metal:17>, 1200);
//InputStack
mods.immersiveengineering.BlastFurnace.removeFuel(<ImmersiveEngineering:material:6>);

//Bottling Machine
//OutputStack, InputStack, InputFluid
mods.immersiveengineering.BottlingMachine.addRecipe(<minecraft:packed_ice>, <minecraft:ice>, <liquid:water> * 1000);
//OutputStack
mods.immersiveengineering.BottlingMachine.removeRecipe(<minecraft:water_bucket>); 

//Coke Oven
//OutputStack, FuelOutput, InputStack, Time in Ticks
mods.immersiveengineering.CokeOven.addRecipe(<minecraft:coal:1> * 2, 500, <minecraft:chest>, 1800);
//OutputStack
mods.immersiveengineering.CokeOven.removeRecipe(<ImmersiveEngineering:material:6>);

//Crusher
//OutputStack1, InputStack, Energy, @Optional OutputStack2,@Optional  OutputStack2Chance //Chance in Decimals
mods.immersiveengineering.Crusher.addRecipe(<ImmersiveEngineering:metal> * 8, <ImmersiveEngineering:storage:8>, 8000, <minecraft:iron_ingot>, 0.5);
//OutputStack
mods.immersiveengineering.Crusher.removeRecipe(<minecraft:blaze_powder>);

//Excavator
//MineralString, MineralWeight, FailChance, OreStringArray, OreChanceArray, @Optional DimensionIDArray, @Optional isWhitelistOrBlacklist //true=blacklist; false=whitelist
mods.immersiveengineering.Excavator.addMineral("Sediment", 30, 15, ["sand", "sandstone"], [50, 15], [0, 1], false);
//MineralString
mods.immersiveengineering.Excavator.removeMineral("Bauxite");
//MineralString + OreString, Chance
mods.immersiveengineering.Excavator.getMineral("Magnetite").addOre("oreNickel", 0.75);
//MineralString + OreString
mods.immersiveengineering.Excavator.getMineral("Magnetite").removeOre("oreGold");

//Fermenter
//OutputStack, OutputFluid, InputStack, Time in Ticks
mods.immersiveengineering.Fermenter.addRecipe(<minecraft:blaze_powder>, <liquid:lava> * 80, <minecraft:nether_wart>, 80);
//OutputStack
mods.immersiveengineering.Fermenter.removeItemRecipe(<minecraft:blaze_powder>);
//OutputFluid
mods.immersiveengineering.Fermenter.removeFluidRecipe(<liquid:ethanol>);

//Metal Press
//OutputStack, InputStack, MoldStack, Energy, @Optional SizeValue
mods.immersiveengineering.MetalPress.addRecipe(<minecraft:stone_slab> * 2, <minecraft:stone>, <ImmersiveEngineering:mold>, 500, 50);
//OutputStack
mods.immersiveengineering.MetalPress.removeRecipe(<ImmersiveEngineering:metal:30>);
//MoldStack
mods.immersiveengineering.MetalPress.removeRecipeByMold(<ImmersiveEngineering:mold:2>);

//Refinery
//OutputFluid, InputFluid1, InputFluid2
mods.immersiveengineering.Refinery.addRecipe(<liquid:lava> * 16, <liquid:plantoil> * 8, <liquid:biodiesel> * 8);
//OutputStack
mods.immersiveengineering.Refinery.removeRecipe(<liquid:biodiesel>);

//Squeezer
//OutputStack, OutputFluid, InputStack, Time in Ticks
mods.immersiveengineering.Squeezer.addRecipe(<minecraft:melon_seeds> * 4, <liquid:water> * 500, <minecraft:melon_block>, 240);
//OutputStack
mods.immersiveengineering.Squeezer.removeItemRecipe(<minecraft:melon_seeds>);
//OutputFluid
mods.immersiveengineering.Squeezer.removeFluidRecipe(<liquid:plantoil>);
```