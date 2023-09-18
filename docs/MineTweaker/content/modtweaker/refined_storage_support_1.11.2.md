# Refined Storage Support 1.11.2
## Handlers Supported
The following handlers are supported:

* Solderer
Each of these handlers can have recipes added or removed:

```zenscript
//Solderer
//OutputStack, Time in Ticks, InputArray
mods.refinedstorage.Solderer.addRecipe(<minecraft:diamond>, 5
  [[<minecraft:coal>, null, <minecraft:coal>], 
  [<minecraft:coal>, <minecraft:coal>, <minecraft:coal>], 
  [<minecraft:obsidian>, <minecraft:obsidian>, <minecraft:obsidian>]]);
//OutputStack
mods.refinedstorage.Solderer.removeRecipe(<minecraft:iron_ingot>); 
```