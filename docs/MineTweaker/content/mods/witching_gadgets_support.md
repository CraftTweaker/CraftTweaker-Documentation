# Witching Gadgets Support
## Handlers Supported
The following handlers are supported:

* Gem Cutting
* Infernal Blast Furnace
* Spinning Wheel
Each of these handlers can have recipes added or removed:

```zenscript
//Gem Cutting
//InputStack, AspectArray
mods.witchinggadgets.GemCutting.addAffinity(<minecraft:nether_star>, ["aer", "ignis", "aqua", "ordo", "perdito"]);
//InputStack //Remove via Oredict
mods.witchinggadgets.GemCutting.removeAffinity(<ore:gemDiamond>);
//InputStack, AspectArray
mods.witchinggadgets.GemCutting.addAversion(<minecraft:nether_star>, ["terra"]);
//InputStack //Remove via Oredict
mods.witchinggadgets.GemCutting.removeAffinity(<ore:gemEmerald>);

//Infernal Blast Furnace
//OutputStack, InputStack, Ticks, Bonus, FlameColour //FlameColour: false = Red Flame, true = Blue Flame ; Iron > Steel = 1200 Ticks, Cluster > Ingot = 440 Ticks
mods.witchinggadgets.InfernalBlastfurnace.addRecipe(<minecraft:netherbrick>, <minecraft:brick>, 200, <minecraft:dirt>, true);
//OutputStack
mods.witchinggadgets.InfernalBlastfurnace.removeRecipe(<minecraft:iron_ingot>);

//Spinning Wheel
//OutputStack, InputArray
mods.witchinggadgets.SpinningWheel.addRecipe(<Thaumcraft:blockWoodenDevice:8>, [<WitchingGadgets:item.WG_Material:1>, <WitchingGadgets:item.WG_Material:1>, <minecraft:dye:1>, <Thaumcraft:ItemResource:7>, <Thaumcraft:blockMagicalLog>]);
//OutputStack
mods.witchinggadgets.SpinningWheel.removeRecipe(<WitchingGadgets:item.WG_Material>);
```