# Flaxbeard Steam Power Support
## Handlers Supported
The following handlers are supported:

* Crucible
* Steaming
Each of these handlers can have recipes added or removed:

```zenscript
//Crucible
//LiquidString, Ingot, Plate, Nugget, Red, Green, Blue
mods.fsp.Crucible.addLiquid("liquidClay", <minecraft:brick_block>, <minecraft:stone_slab:4>, <minecraft:brick>, 203, 74, 42);

//InputStack, LiquidString, FluidAmount //1 = Nugget, 6 = Plate, 9 = Ingot
mods.fsp.Crucible.addMelting(<minecraft:brick>, "liquidClay", 1); 
//InputStack
mods.fsp.Crucible.removeMelting(<minecraft:gold_ingot>); #NOT WORKING

//InputStack, LiquidString, FluidAmount, OutputStack
mods.fsp.Crucible.addDunking(<minecraft:brick>, "liquidClay", 1, <minecraft:netherbrick>); 
//InputStack, LiquidString
mods.fsp.Crucible.removeDunking(<minecraft:iron_ingot>, "liquidGold"); 
```