# Metallurgy 4 Support
## Handlers Supported
The following handlers are supported:

* Alloyer
* Crusher
Each of these handlers can have recipes added or removed:

```zenscript
//Alloyer
//InputStack1, InputStack2, OutputStack
mods.metallurgy.Alloyer.addRecipe(<minecraft:water_bucket>, <minecraft:lava_bucket>, <minecraft:obsidian>);
//OutputStack
mods.metallurgy.Alloyer.removeRecipe(<Metallurgy:bronze.ingot>);

//Crusher
//InputStack, OutputStack
mods.metallurgy.Crusher.addRecipe(<minecraft:cactus>, <minecraft:dye:2>);
//InputStack
mods.metallurgy.Crusher.removeRecipe(<minecraft:iron_ore>);
```