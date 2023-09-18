# Random Things Support 1.10.2
## Handlers Supported
The following handlers are supported:

* Imbuing Station
Each of these handlers can have recipes added or removed:

```zenscript
//Imbuing Station
//OutputStack, InputMainStack, Input1Stack, Input2Stack, Input3Stack
mods.randomthings.ImbuingStation.add(<minecraft:diamond>, <minecraft:emerald>, <minecraft:dye>, <minecraft:dye:2>, <minecraft:dye:3>);
//InputOre, OutputFluid, MatchMeta, MatchNBT
mods.randomthings.ImbuingStation.remove(<minecraft:nether_star>);
```