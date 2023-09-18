# BetterStorage
## Handlers Supported
The following handlers are supported:

* Crafting Station
Each of these handlers can have recipes added or removed:
```zenscript

//Crafting Station
//OutputArray, ExperienceLevels*, InputArray (* = Optional)
mods.betterstorage.CraftingStation.addShapeless([<minecraft:gold_block>, <minecraft:chest>, <minecraft:gold_ingot> * 4], 15, 
[<betterstorage:reinforcedChest>.withTag({Material: "gold"})]);
//OutputArray, ExperienceLevels*, InputArray (* = Optional)

mods.betterstorage.CraftingStation.addShaped([<minecraft:chainmail_chestplate>], 5,
[[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],
 [<minecraft:string>, <minecraft:iron_ingot>, <minecraft:string>],
 [<minecraft:iron_ingot>, <minecraft:string>, <minecraft:iron_ingot>]]);
 ```