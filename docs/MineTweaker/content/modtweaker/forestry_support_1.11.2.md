# Forestry Support 1.11.2
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
//OutputStack, InputArray, Time in Ticks, @Optional InputFluid, @Optional BoxStack
mods.forestry.Carpenter.addRecipe(<forestry:oakStick> * 2, 
  [[null, <ore:stickWood>, null],
  [<minecraft:planks>, null, <minecraft:planks>], 
  [null, <minecraft:planks>, null]], 20, <liquid:seed.oil> * 100, <minecraft:log>);
//OutputStack, @Optional InputFluid
mods.forestry.Carpenter.removeRecipe(<forestry:impregnatedCasing>, <liquid:seed.oil>);

//Centrifuge
//OutputArray, @Optional % Percentage, InputStack, Time in Ticks
mods.forestry.Centrifuge.addRecipe([<minecraft:leaves> % 200, <minecraft:stick> % 80, <forestry:beeCombs> % 20], <minecraft:sapling>, 20);
//InputStack
mods.forestry.Centrifuge.removeRecipe(<forestry:beeCombs>);

//Fermenter
//OutputFluid, InputStack, FluidInput, FermentationValue, FluidOutputModifier (FermentationValue: determines the amount fluid needed for the recipe)
mods.forestry.Fermenter.addRecipe(<liquid:for.honey>, <minecraft:sugar>, <liquid:water>, 100, 2);
//InputStack
mods.forestry.Fermenter.removeRecipe(<minecraft:reeds>);
//InputStack, CycleAmount, BurnDuration
mods.forestry.Fermenter.addFuel(<minecraft:dirt:2>, 1000, 1000);
//InputStack
mods.forestry.Fermenter.removeFuel(<minecraft:stone:1>);

//Moistener
//OutputStack, InputStack, Time in Ticks
mods.forestry.Moistener.addRecipe(<minecraft:grass>, <minecraft:dirt>, 5000);
//OutputStack
mods.forestry.Moistener.removeRecipe(<minecraft:mycelium>);
//InputStack, OutputStack, MoistenerValue, Priority
mods.forestry.Moistener.addFuel(<minecraft:seeds>, <minecraft:dye:15>, 20, 1);
//InputStack
mods.forestry.Moistener.removeFuel(<minecraft:wheat>);

//Squeezer
//OutputFluid, InputArray, Time in Ticks, @Optional OutputStack + %
mods.forestry.Squeezer.addRecipe(<liquid:ice> * 1000, [<minecraft:packed_ice> * 4, <minecraft:snowball>], 20, <forestry:craftingMaterial:5> % 50); 
//OutputFluid, @Optional InputArray
mods.forestry.Squeezer.removeRecipe(<liquid:water>, [<minecraft:cactus>]);

//Still
//OutputFluid, InputFluid, Time in Ticks
mods.forestry.Still.addRecipe(<liquid:bio.ethanol> * 20, <liquid:juice> * 20, 100); 
//OutputFluid, InputFluid
mods.forestry.Still.removeRecipe(<liquid:bio.ethanol>, <liquid:biomass>);

//Thermionic Fabricator
//MoltenGlassOutput, InputStack, MeltingTemperature,
mods.forestry.ThermionicFabricator.addSmelting(375, <minecraft:stained_glass_pane>, 1000); 
//InputStack
mods.forestry.ThermionicFabricator.removeSmelting(<minecraft:sand>); 
//OutputStack, InputArray, MoltenGlassInput, @Optional CastInput
mods.forestry.ThermionicFabricator.addCast(<minecraft:beacon>, [
  [<ore:paneGlass>, <ore:paneGlass>, <ore:paneGlass>], 
  [<ore:paneGlass>, <minecraft:nether_star>, <ore:paneGlass>], 
  [<minecraft:obsidian>, <minecraft:obsidian>, <minecraft:obsidian>]], 1000, <forestry:waxCast:*>);
//OutputStack
mods.forestry.ThermionicFabricator.removeCast(<minecraft:stained_glass>);
```