# GregTech Support
## Handlers Supported
The following handlers are supported:

* Alloy Smelter
* Amplifabricator
* Arc Furnace
* Assembler
* Autoclave
* Blast Furnace
* Brewery
* Canner
* Centrifuge
* Chemical Bath
* Chemical Reactor
* Cutting Saw
* Distillation Tower
* Distillery
* Extruder
* Electrolyzer
* Fermenter
* Fluid Canner
* Fluid Extractor
* Fluid Heater
* Fluid Solidifier
* Forge Hammer
* Forming Press
* Fuels
* Fusion Reactor
* Implosion Compressor
* Lathe
* Mixer
* Oil Cracker
* Packer
* Plasma Arc Furnace
* Plate Bender
* Plate Cutter
* Polarizer
* Precision Laser
* Printer
* Pulverizer
* Pyroluse Oven
* Separator
* Sifter
* Slicer
* Unpacker
* VacuumFreezer
* Wiremill
**NOTE: Time in Ticks * EnergyUsage = InputEU**

Each of these handlers can have recipes added or removed:

```zenscript
Parameters with '@Optional' are optional and can be left out
 
//Alloy Smelter
//OutputStack, InputStack1, InputStack2, Time in Ticks, EnergyUsage
mods.gregtech.AlloySmelter.addRecipe(<minecraft:slime_ball>, <IC2:itemRubber>, <gregtech:gt.metaitem.01:32307> * 0, 800, 30);

//Amplifabricator
//InputStack, Time in Ticks, OutputUU
mods.gregtech.Amplifabricator.addRecipe(<minecraft:tnt>, 200, 10);

//Arc Furnace
//OutputArray, InputStack, InputFluid, OutputArrayChances, Time in Ticks, EnergyUsage
mods.gregtech.ArcFurnace.addRecipe([<gregtech:gt.metaitem.01:11304> * 5, <gregtech:gt.metaitem.01:11304> * 4], <IC2:itemRecipePart:11>, <liquid:oxygen> * 504, [10000, 5000], 1200, 32);

//Assembler
//OutputStack, InputStack1, InputStack2, @Optional InputFluid, Time in Ticks, EnergyUsage
mods.gregtech.Assembler.addRecipe(<IC2:itemRTGPellet>, <gregtech:gt.metaitem.01:22032> * 6, <IC2:itemPlutonium> * 3, <liquid:glue> * 1000, 1200, 128);

//Autoclave
//OutputStack, InputStack, InputFluid, OutputStackChance, Time in Ticks, EnergyUsage
 mods.gregtech.Autoclave.addRecipe(<minecraft:diamond>, <gregtech:gt.metaitem.01:2500>, <liquid:water> * 200, 9000, 2000, 32);
 
//Blast Furnace
//OutputArray, @Optional InputFluid, InputArray, Time in Ticks, EnergyUsage, HeatAmount
mods.gregtech.BlastFurnace.addRecipe([<gregtech:gt.blockmetal6:13>, <gregtech:gt.metaitem.01:2816>], <liquid:oxygen> * 9000, [<gregtech:gt.blockmetal8:2>], 1500, 120, 1500);

//Brewery
//InputFluid, InputStack, OutputFluid, isHidden
mods.gregtech.Brewery.addRecipe(<liquid:ic2distilledwater> * 10000, <minecraft:nether_star>, <liquid:holywater> * 1000, false);

//Canning Machine
//OutputArray, InputStack1, InputStack2, Time in Ticks, EnergyUsage
mods.gregtech.Canner.addRecipe([<IC2:itemTinCanFilled> * 4, <minecraft:sugar>], <minecraft:reeds> * 4, <IC2:itemTinCan>, 50, 200);

//Centrifuge
//OutputArray, @Optional InputFluid, InputStack, InputCell, OutputFluid, OutputArrayChances, Time in Ticks, EnergyUsage
mods.gregtech.Centrifuge.addRecipe([<minecraft:sand> * 12, <minecraft:gunpowder> * 15, <minecraft:flint> * 6], <liquid:water> * 200, <IC2:blockITNT> * 4, <gregtech:gt.metatool.01:26>, <liquid:potion.mineralwater> * 200, [10000, 9000, 8000], 100, 50);

//Chemical Bath
//OutputArray, InputStack, InputFluid, OutputArrayChances, Time in Ticks, EnergyUsage
mods.gregtech.ChemicalBath.addRecipe([<IC2:itemToolPainterBlack>], <IC2:itemToolPainter>, <liquid:dye.watermixed.dyeblack> * 144, [10000], 200, 2);

//Chemical Reactor
//OutputStack, @Optional OutputFluid, InputStack1, InputStack2, InputFluid, Time in Ticks
mods.gregtech.ChemicalReactor.addRecipe(<IC2:itemFertilizer> * 2, <liquid:potion.mineralwater>, <minecraft:dye:15>, <gregtech:gt.metaitem.01:2815>, <liquid:water>, 200);

//Cutting Saw
//OutputArray, InputStack, InputFluid, Time in Ticks, EnergyUsage
mods.gregtech.CuttingSaw.addRecipe([<minecraft:planks> * 3, <minecraft:wool> * 3], <minecraft:bed>, <liquid:water> * 12, 30, 30);

//Distillation Tower
//OutputFluidArray, OutputStack, InputFluid, Time in Ticks, EnergyUsage
mods.gregtech.DistillationTower.addRecipe([<liquid:lava> * 800, <liquid:liquid_heavy_oil> * 100, <liquid:liquid_medium_oil> * 75, <liquid:liquid_light_oil> * 25],  <gregtech:gt.metaitem.01:2940> * 4, <liquid:ic2pahoehoelava> * 1000, 50, 100);

//Distillery
//OutputFluid, InputCircuit, InputFluid, Time in Ticks, EnergyUsage, isHidden
mods.gregtech.Distillery.addRecipe(<liquid:potion.chocolatemilk> * 250, <gregtech:gt.integrated_circuit:4> * 0, <liquid:milk> * 250, 80, 30, false);

//Electrolyzer
//OutputArray, @Optional OutputFluid, InputStack, InputCell, InputFluid, OutputArrayChances, Time in Ticks, EnergyUsage
mods.gregtech.Electrolyzer.addRecipe([<gregtech:gt.metaitem.01:2086> * 3, <gregtech:gt.metaitem.01:1086> * 4, <gregtech:gt.metaitem.01:86> * 5], <liquid:molten.gold>,  <gregtech:gt.blockmetal5:12>, <gregtech:gt.neutronreflector>, <liquid:molten.platinum>, [10000, 8000, 6000], 1000, 40000);

//Extruder
//OutputStack, InputStack, InputShape, Time in Ticks, EnergyUsage
mods.gregtech.Extruder.addRecipe(<minecraft:quartz_block>, <minecraft:quartz> * 4, <gregtech:gt.metaitem.01:32363> * 0, 120, 128);

//Fermenter
//OutputFluid, InputFluid, Time in Ticks, isHidden
mods.gregtech.Fermenter.addRecipe(<liquid:ic2pahoehoelava> * 50, <liquid:lava> * 1000, 20, false);

//Fluid Canner
//OutputStack, InputStack, OutputFluid, InputFluid
mods.gregtech.FluidCanner.addRecipe(<IC2:itemMugCoffee:1>, <IC2:itemMugEmpty>, <liquid:steam> * 200, <liquid:potion.darkcoffee> * 500);

//Fluid Extractor
//OutputStack, InputStack, OutputFluid, OutputStackChance, Time in Ticks, EnergyUsage
mods.gregtech.FluidExtractor.addRecipe(<gregtech:gt.metaitem.01:30702>, <minecraft:packed_ice> , <liquid:ice> * 4000, 6000, 20, 2);

//Fluid Heater
//OutputFluid, InputCircuit, InputFluid, Time in Ticks, EnergyUsage
mods.gregtech.FluidHeater.addRecipe(<liquid:ic2hotcoolant> * 250, <gregtech:gt.integrated_circuit> * 0, <liquid:ic2coolant> * 250, 40, 20); 

//Fluid Solidifier
//OutputStack, InputMold, InputFluid, Time in Ticks, EnergyUsage
mods.gregtech.FluidSolidifier.addRecipe(<minecraft:packed_ice>, <gregtech:gt.metaitem.01:32308> * 0, <liquid:ice> * 4000, 480, 64);

//Forge Hammer
//OutputStack, InputStack, Time in Ticks, EnergyUsage
mods.gregtech.ForgeHammer.addRecipe(<gregtech:gt.metaitem.02:22874>, <gregtech:gt.metaitem.01:23874> * 2, 20, 16);

//Forming Press
//OutputStack, InputStack1, InputStack2, Time in Ticks, EnergyUsage
mods.gregtech.FormingPress.addRecipe(<gregtech:gt.metaitem.01:32200> * 12, <IC2:blockAlloyGlass>, <gregtech:gt.metaitem.01:32316>, 200, 480);

//Fuels
//OutputStack, InputStack, EnergyOutputPerMb //One InputStack equals 1000mB
mods.gregtech.Fuels.addDieselFuel(<IC2:itemCellEmpty>, <gregtech:gt.metaitem.01:30730>, 250);
mods.gregtech.Fuels.addGasTurbineFuel(<IC2:itemCellEmpty>, <IC2:itemCellEmpty:14>, 100);
mods.gregtech.Fuels.addThermalGeneratorFuel(<IC2:itemCellEmpty>, <IC2:itemCellEmpty:11>, 1000);
mods.gregtech.Fuels.addDenseFluidFuel(<IC2:itemCellEmpty>, <gregtech:gt.metaitem.01:30964>, 2000);
mods.gregtech.Fuels.addPlasmaGeneratorFuel(<IC2:itemCellEmpty>, <IC2:itemCellEmpty:2>, 20);
mods.gregtech.Fuels.addMagicGeneratorFuel(<gregtech:gt.metaitem.01:24532>, <minecraft:dragon_egg>, 20000);

//Fusion Recator
//OutputFluid, InputFluid1, InputFluid2, Time in Ticks, EnergyUsage, StartEnergy
mods.gregtech.FusionReactor.addRecipe(<liquid:potion.diablosauce.strong> * 5, <liquid:molten.plutonium> * 100, <liquid:molten.naquadah> * 50, 200, 5000, 10000000); 

//Implosion Compressor
//OutputArray, InputStack, TNTAmount
mods.gregtech.ImplosionCompressor.addRecipe([<minecraft:bedrock>, <gregtech:gt.metaitem.01:2816> * 16], <gregtech:gt.metaitem.01:21327> * 32, 64);

//Lathe
//OutputArray, InputStack, Time in Ticks, EnergyUsage
mods.gregtech.Lathe.addRecipe([<minecraft:redstone>, <minecraft:stick>], <minecraft:redstone_torch>, 640, 16);

//Mixer
//OutputStack, @Optional OutputFluid, InputArray, FluidInput, Time in Ticks, EnergyUsage
mods.gregtech.Mixer.addRecipe(<IC2:itemFertilizer>, <liquid:dye.watermixed.dyered> * 1000, [<minecraft:sand>, <minecraft:double_plant:4>], <liquid:water> * 1000, 100, 16);

//Oil Cracker
//OutputFluid, InputFluidTime, Time in Ticks, EnergyUsage
mods.gregtech.OilCracker.addRecipe(recipe needed);

//Packer
//OutputStack, InputStack1, InputStack2, Time in Ticks, EnergyUsage
mods.gregtech.Packer.addRecipe(<minecraft:iron_block>, <minecraft:iron_ingot> * 9, <gregtech:gt.metaitem.01:32497>, 50, 25);

//Plasma Arc Furnace
//OutputArray, OutputFluid, InputStack, InputFluid, OutputArrayChances, Time in Ticks, EnergyUsage
mods.gregtech.PlasmaArcFurnace.addRecipe([<IC2:itemCellEmpty:13>], <liquid:nitrogen> * 250, <IC2:itemCellEmpty:14>, <liquid:plasma.nitrogen> * 250, [10000], 65, 30);

//Plate Bender
//OutputStack, InputStack, Time in Ticks, EnergyUsage
mods.gregtech.PlateBender.addRecipe(<IC2:itemDensePlates:7>, <gregtech:gt.metaitem.01:17804> * 9, 3600, 96);

//Polarizer
//OutputStack, InputStack, Time in Ticks, EnergyUsage
mods.gregtech.Polarizer.addRecipe(<IC2:itemStaticBoots>, <minecraft:iron_boots>, 600, 30);

//Precision Laser
//OutputStack, InputLens, InputStack, Time in Ticks, EnergyUsage
mods.gregtech.PrecisionLaser.addRecipe(<gregtech:gt.metaitem.02:29500>, <gregtech:gt.metaitem.01:24500> * 0, <minecraft:diamond> * 4, 1200, 480);

//Printer
//OutputStack, InputStack, InputStick, InputFluid, Time in Ticks, EnergyUsage
mods.gregtech.Printer.addRecipe(<minecraft:writable_book>, <minecraft:book>, <minecraft:feather>, <liquid:squidink>, 25, 15);

//Pulveriser
//OutputArray, InputStack, OutputArrayChances, Time in Ticks, EnergyUsage
mods.gregtech.Pulverizer.addRecipe([<minecraft:dirt>, <IC2:itemFuelPlantBall>, <minecraft:red_mushroom>, <minecraft:brown_mushroom>], <minecraft:dirt:2>, [10000, 3000, 1500, 1500], 400, 2);

//Pyrolyse Oven
//OutputStack, OutputFluid, Circuit as Int, InputStack, InputFluidTime, Time in Ticks, EnergyUsage
mods.gregtech.PyrolYseOven.addRecipe(recipe needed);
 
//Separator
//OutputArray, InputStack, OutputArrayChances, Time in Ticks, EnergyUsage
mods.gregtech.Separator.addRecipe([<gregtech:gt.metaitem.02:27500>, <gregtech:gt.metaitem.01:1324> * 2, <gregtech:gt.metaitem.01:324> * 4], <gregtech:gt.metaitem.01:2506>, [5000, 2000, 1500], 200, 300);

//Sifter
//OutputArray, InputStack, OutputArrayChances, Time in Ticks, EnergyUsage
mods.gregtech.Sifter.addRecipe([<minecraft:wheat_seeds>, <gregtech:gt.metaitem.01:2299>, <IC2:itemFertilizer>], <minecraft:dirt>, [2000, 500, 250], 10, 5);

//Slicer
//OutputStack, InputStack, InputBlade, Time in Ticks, EnergyUsage
mods.gregtech.Slicer.addRecipe(<minecraft:melon> * 8, <minecraft:melon_block>, <gregtech:gt.metaitem.01:32398> * 0, 100, 8);

//Unpacker
//OutputStack1, OutputStack2, InputStack, Time in Ticks, EnergyUsage
mods.gregtech.Unpacker.addRecipe(<minecraft:sand> * 4, <minecraft:gunpowder> * 5, <minecraft:tnt>, 50, 200);

//Vacuum Freezer
//OutputStack, InputStack, Time in Ticks
mods.gregtech.VacuumFreezer.addRecipe(<IC2:itemCellEmpty:2>, <IC2:itemCellEmpty:11>, 50);

//Wiremill
//OutputStack, InputStack, Time in Ticks, EnergyUsage
mods.gregtech.Wiremill.addRecipe(<minecraft:string> * 4, <minecraft:wool>, 100, 50);
```