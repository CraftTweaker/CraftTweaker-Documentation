# Forestry Support
## Handlers Supported
The following handlers are supported:

* Carpenter
* Centrifuge
* Fermenter
* Moistener
* Squeezer
* Still
* Thermionic Fabricator
Each of these handlers can have recipes added or removed:

```zenscript
Parameters with '@Optional' are optional and can be left out

//Carpenter
//OutputStack, InputArray, @Optional InputFluid, Time in Ticks, @Optional BoxStack
mods.forestry.Carpenter.addRecipe(<Forestry:oakStick> * 2, [[null, <minecraft:planks>, null],
                                                            [<minecraft:planks>, null, <minecraft:planks>], 
                                                            [null, <minecraft:planks>, null]], <liquid:seedoil> * 100, 20, <minecraft:log>);
//OutputStack, @Optional InputFluid
mods.forestry.Carpenter.removeRecipe(<Forestry:impregnatedCasing>, <liquid:seedoil>);

//Centrifuge
//Array of Output @Optional + %, InputStack, Time in Ticks
mods.forestry.Centrifuge.addRecipe([<minecraft:leaves> % 200, <minecraft:stick> % 80, <Forestry:beeCombs> % 20], <minecraft:sapling>, 20);
//InputStack
mods.forestry.Centrifuge.removeRecipe(<Forestry:beeCombs>);

//Fermenter
//OutputFluid, InputStack, FluidInput, FermentationValue, FloatModifier //FermentationValue [Amount of InputFluid] * FloatModifier [Multiplier for OutputFluid] = Amount of OutputFluid
mods.forestry.Fermenter.addRecipe(<liquid:honey>, <minecraft:sugar>, <liquid:water>, 100, 2);
//InputStack
mods.forestry.Fermenter.removeRecipe(<minecraft:reeds>);
//InputStack, CycleAmount, BurnDuration
mods.forestry.Fermenter.addFuel(<minecraft:dirt:2>, 1000, 1000);
//InputStack
mods.forestry.Fermenter.removeFuel(<Forestry:mulch>);

//Moistener
//OutputStack, InputStack, Time in Ticks
mods.forestry.Moistener.addRecipe(<minecraft:dirt:2>, <minecraft:grass>, 5000);
//OutputStack
mods.forestry.Moistener.removeRecipe(<minecraft:mycelium>);

//Squeezer
//OutputFluid, OutputStack @Optional + %, InputArray, Time in Ticks
mods.forestry.Squeezer.addRecipe(<liquid:ice> * 1000, <Forestry:craftingMaterial:5> % 200, [<minecraft:packed_ice> * 4, <minecraft:snowball>], 20); 
//OutputFluid, @Optional InputArray
mods.forestry.Squeezer.removeRecipe(<liquid:water>, [<Forestry:canWater>]);

//Still
//OutputFluid, InputFluid, Time in Ticks
mods.forestry.Still.addRecipe(<liquid:bioethanol> * 20, <liquid:juice> * 20, 100); 
//OutputFluid, @Optional InputFluid
mods.forestry.Still.removeRecipe(<liquid:bioethanol>, <liquid:biomass>);

//Thermionic Fabricator
//MoltenGlassOutput, InputStack, MeltingTemperature, //MoltenGlassOutput: Glass & Sand = 1000mB; Glass Pane = 375mB + MeltingTemperature: Glass & Glass Pane = 1000; Sand = 3000
mods.forestry.ThermionicFabricator.addSmelting(375, <minecraft:stained_glass_pane>, 1000); 
//InputStack
mods.forestry.ThermionicFabricator.removeSmelting(<minecraft:sand>); 
//OutputStack, InputArray, MoltenGlassInput, @Optional CastInput
mods.forestry.ThermionicFabricator.addCast(<minecraft:beacon>, [[null, null, null], 
                                                                [null, <minecraft:nether_star>, null], 
                                                                [<minecraft:obsidian>, <minecraft:obsidian>, <minecraft:obsidian>]], 1000, <Forestry:waxCast:*>);
//OutputStack
mods.forestry.ThermionicFabricator.removeCast(<minecraft:stained_glass>);
```