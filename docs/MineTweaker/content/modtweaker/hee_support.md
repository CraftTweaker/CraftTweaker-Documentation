# HEE Support

## Handlers Supported
The following handlers are supported:

* Essence Altar
Each of these handlers can have recipes added or removed:
```zenscript
//Essence Altar recipes
//InputStack, OutputStack, Essence cost
mods.hee.EssenceAltar.addRecipe(<minecraft:stone>, <minecraft:diamond>, 25);

//Remove Essence Altar recipe
mods.hee.EssenceAltar.removeRecipe(<HardcoreEnderExpansion:enhanced_brewing_stand>);
```