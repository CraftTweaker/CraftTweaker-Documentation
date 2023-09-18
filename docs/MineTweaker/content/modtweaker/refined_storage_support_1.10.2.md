# Refined Storage Support 1.10.2
## Handlers Supported
The following handlers are supported:

* Solderer
Each of these handlers can have recipes added or removed:
```zenscript
Parameters with '@Optional' are optional and can be left out

//Solderer
//OutputStack, Time, Input1Stack, Input2Stack, @Optional Input3Stack
mods.refinedstorage.Solderer.add(<minecraft:diamond>, 10, <minecraft:dye>, <minecraft:dye:1>, <minecraft:dye:2>);
//OuputStack
mods.refinedstorage.Solderer.remove(<redstone_dust>);
```