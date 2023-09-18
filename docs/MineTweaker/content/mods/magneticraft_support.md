# Magneticraft Support
## Handlers Supported
The following handlers are supported:

* Biomass Burner
* Crusher
* Crushing Table
* Grinder
* Oil Distillery
* Polymerizer
* Refinery
* Sifter
* Thermopile
Each of these handlers can have recipes added or removed:

```zenscript

Parameters with '@Optional' are optional and can be left out

//Biomass Burner
//InputStack, Time in Ticks
mods.magneticraft.BiomassBurner.addFuel(<minecraft:sugar>, 50);
//InputStack
mods.magneticraft.BiomassBurner.removeFuel(<minecraft:sapling>);

//Crusher
//InputStack, OutputStack1, OutputStack2, @Optional OutputStackChance2, @Optional OutputStack3, @Optional OutputStackChance3
mods.magneticraft.Crusher.addRecipe(<minecraft:sandstone>, <minecraft:sand> * 2, <minecraft:sand>, 0.5, <minecraft:sand>, 0.2);
//InputStack
mods.magneticraft.Crusher.removeRecipe(<Magneticraft:salt_ore>);

//Crushing Table
//InputStack, OutputStack
mods.magneticraft.CrushingTable.addRecipe(<minecraft:bucket>, <minecraft:iron_ingot> * 3);
//InputStack
mods.magneticraft.CrushingTable.removeRecipe(<Magneticraft:limestone>);

//Grinder
//InputStack, OutputStack1, @Optional OutputStack2, @Optional OutputStackChance2, @Optional OutputStack3, @Optional OutputStackChance3
mods.magneticraft.Grinder.addRecipe(<Magneticraft:roofTile> * 2, <minecraft:brick> * 2, <minecraft:brick> * 2, 0.8, <minecraft:brick>, 0.5);
//InputStack
mods.magneticraft.Grinder.removeRecipe(<minecraft:obsidian>);

//Oil Distillery
//InputFluid, OutputFluid, InputRF
mods.magneticraft.OilDistillery.addRecipe(<liquid:lava> * 100, <liquid:oil>, 200);
//InputFluid
mods.magneticraft.OilDistillery.removeRecipe(<liquid:oil>);

//Polymerizer
//InputFluid, InputStack, OutputStack, TemperatureAmount
mods.magneticraft.Polymerizer.addRecipe(<liquid:oil> * 1000, <minecraft:leaves>, <Magneticraft:item.plastic>, 1000);
//InputStack
mods.magneticraft.Polymerizer.removeRecipe(<minecraft:coal>);

//Refinery
//InputFluid, OutputFluid1, @Optional OutputFluid2, @Optional OutputFluid3
mods.magneticraft.Refinery.addRecipe(<liquid:lava> * 1000, <liquid:hotcrude> * 600, <liquid:naturalgas> * 200, <liquid:oil> * 200);
//InputFluid
mods.magneticraft.Refinery.removeRecipe(<liquid:oil>);

//Sifter
//InputStack, OutputStack1, @Optional OutputStack2, @Optional OutputStackChance2
mods.magneticraft.Sifter.addRecipe(<minecraft:glowstone_dust>, <Magneticraft:item.dust:1>, <Magneticraft:item.dustSulfur>, 0.8);
//InputStack
mods.magneticraft.Sifter.removeRecipe(<Magneticraft:item.pebbles>);

//Thermopile
//InputBlock, TemperatureAmount
mods.magneticraft.Thermopile.addHotSource(<Magneticraft:blockhotcrude>, 100);
//InputBlock, TemperatureAmount
mods.magneticraft.Thermopile.addColdSource(<minecraft:packed_ice>, 100);
//InputBlock
mods.magneticraft.Thermopile.removeHeatSource(<minecraft:ice>);
```