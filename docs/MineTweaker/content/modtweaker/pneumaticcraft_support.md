# PneumaticCraft Support
## Handlers Supported
The following handlers are supported:

* Assembly
* Pressure Chamber
Each of these handlers can have recipes added or removed:
```zenscript
//Assembly
//Drill
//InputStack, OutputStack
mods.pneumaticcraft.Assembly.addDrillRecipe(<minecraft:diamond>, <minecraft:dye:6> * 6);
//OutputStack
mods.pneumaticcraft.Assembly.removeDrillRecipe(<minecraft:dye:1>);
//Laser
//InputStack, OutputStack
mods.pneumaticcraft.Assembly.addLaserRecipe(<PneumaticCraft:fuelBucket>, <minecraft:lava_bucket>);
//OutputStack
mods.pneumaticcraft.Assembly.removeLaserRecipe(<PneumaticCraft:aphorismTile>);
//Laser Drill
//InputStack, OutputStack
mods.pneumaticcraft.Assembly.addLaserDrillRecipe(<PneumaticCraft:airCompressor>, <PneumaticCraft:advancedAirCompressor>);
//OutputStack
mods.pneumaticcraft.Assembly.removeLaserDrillRecipe(<PneumaticCraft:advancedPressureTube>); 

//Pressure Chamber
//InputArray, PressureRequired, OutputArray, asBlock
mods.pneumaticcraft.Pressure.addRecipe([<minecraft:iron_ingot>, <minecraft:iron_bars> * 4], 2, [<PneumaticCraft:compressedIronGear>], true);
//OutputArray
mods.pneumaticcraft.Pressure.removeRecipe([<minecraft:diamond>]);
```