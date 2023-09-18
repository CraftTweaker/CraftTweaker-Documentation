# Blood Magic Support 1.10.2
## Handlers Supported
The following handlers are supported:

* Alchemy Table
* Altar
* Soul Forge
Each of these handlers can have recipes added or removed:

```zenscript
//Alchemy Table
//OutputStack, LP, Ticks, Tier, InputArray
mods.bloodmagic.AlchemyTable.addRecipe(<minecraft:nether_star>, 500000, 5000, 5, [minecraft:gold_ingot>, <minecraft:diamond>]);
//OutputStack
mods.bloodmagic.AlchemyTable.removeRecipe(<minecraft:sugar>);

//Altar
//OutputStack, MinimumTier, SyphonValue, ConsumeRate, DrainRate, InputArray
mods.bloodmagic.Altar.addRecipe(<minecraft:diamond>, 2, 50, 200, 500, [<minecraft:coal>, <minecraft:gold_ingot>]);
//OutputStack
mods.bloodmagic.Altar.removeRecipe(<minecraft:glass>);
//OutputStack, ItemList, Map
mods.bloodmagic.Altar.removeRecipe(<minecraft:glass>, <minecraft:diamond>, <minecraft:gold_ingot>);  

//Soul Forge
//OuputStack, MinimumSoul, DrainRate, InputArray
mods.bloodmagic.SoulForge.addRecipe(<minecraft:netherrack>, 5, 10, [<minecraft:blaze_rod>, <minecraft:dirt>]);
//OutputStack
mods.bloodmagic.SoulForge.removeRecipe(<minecraft:glass>);
```