# Thermal Expansion Support
## Handlers Supported
The following handlers are supported:

* Magma Crucible
* Redstone Furnace
* Phytogenic Insolator
* Pulverizer
* Sawmill
* Induction Smelter
* Fluid Transposer
**NOTE: Modifiying Thermal Expansion via Modtweaker might sometimes require a restart of the game, especially if you remove recipes. Somtimes removing recipes will not even work.**

Each of these handlers can have recipes added or removed:

```zenscript
Parameters with '@Optional' are optional and can be left out

//Magma Crucible
//InputRF, InputStack, OutputFluid
mods.thermalexpansion.Crucible.addRecipe(500000, <minecraft:dragon_egg>, <liquid:ender> * 8000);
//InputStack
mods.thermalexpansion.Crucible.removeRecipe(<minecraft:netherrack>);

//Redstone Furnace
//InputRF, InputStack, OutputStack
mods.thermalexpansion.Furnace.addRecipe(16000, <minecraft:obsidian>, <minecraft:netherrack>);
//InputStack //Recommended to sync with "furnace.remove();" function
mods.thermalexpansion.Furnace.removeRecipe(<minecraft:potato>);

//Phytogenic Insolator
//InputRF, InputStack1, InputStack2, OutputStack1, @Optional OutputStack2, @Optional Chance
mods.thermalexpansion.Insolator.addRecipe(7200, <ThermalExpansion:material:516>, <minecraft:mycelium>, <minecraft:mycelium>, <minecraft:brown_mushroom>, 50);
mods.thermalexpansion.Insolator.addRecipe(9600, <ThermalExpansion:material:517>, <minecraft:mycelium>, <minecraft:mycelium> * 3, <minecraft:brown_mushroom>, 50);
//InputStack1, InputStack2
mods.thermalexpansion.Insolator.removeRecipe(<ThermalExpansion:material:516>, <minecraft:cactus>);
mods.thermalexpansion.Insolator.removeRecipe(<ThermalExpansion:material:517>, <minecraft:cactus>);

//Pulverizer
//InputRF, InputStack, OutputStack1, @Optional OutputStack2, @Optional Chance
mods.thermalexpansion.Pulverizer.addRecipe(3000, <minecraft:flint_and_steel>, <minecraft:flint>, <minecraft:iron_ingot>, 80);
//InputStack
mods.thermalexpansion.Pulverizer.removeRecipe(<minecraft:reeds>);

//Sawmill
//InputRF, InputStack, OutputStack1, @Optional OutputStack2, @Optional Chance
mods.thermalexpansion.Sawmill.addRecipe(2400, <minecraft:ladder>, <minecraft:stick> * 5, <ThermalExpansion:material:512>, 100);
//InputStack
mods.thermalexpansion.Sawmill.removeRecipe(<minecraft:bed>);

//Induction Smelter
//InputRF, InputStack, InputStack2, OutputStack1, @Optional OutputStack2, @Optional Chance
mods.thermalexpansion.Smelter.addRecipe(800, <minecraft:dye:1>, <minecraft:sand>, <minecraft:stained_glass:14>, <ThermalExpansion:material:514>, 25);
//InputStack, InputStack1
mods.thermalexpansion.Smelter.removeRecipe(<minecraft:sand>, <minecraft:redstone_ore>);

//Fluid Transposer
//InputRF, InputStack, OutputStack, InputFluid
mods.thermalexpansion.Transposer.addFillRecipe(2000, <minecraft:gunpowder>, <minecraft:tnt> * 2, <liquid:redstone> * 100);
//InputRF, InputStack, InputFluid, @Optional OutputStack, @Optional Chance
mods.thermalexpansion.Transposer.addExtractRecipe(2000, <minecraft:leaves>, <liquid:water> * 50, <minecraft:stick>, 100);
//InputStack, InputFluid
mods.thermalexpansion.Transposer.removeFillRecipe(<minecraft:glass_bottle>, <liquid:water>);
//InputStack
mods.thermalexpansion.Transposer.removeExtractRecipe(<minecraft:water_bucket>);
```
Commands Supported
Prints are stored in the minetweaker log in the minecraft directory.

```
/minetweaker thermalexpansion [HANDLER] - Outputs a list of all Thermal Expansion recipes
```