# Embers Support 1.10.2
## Handlers Supported
The following handlers are supported:

* Melter
* Mixer
* Stamper
Each of these handlers can have recipes added or removed:

```zenscript
//Melter
//InputStack, OutputFluid, MatchMeta, MatchNBT
mods.embers.Melter.addRecipe(<minecraft:snow>, <liquid:water>, false, false);
//InputOre, OutputFluid, MatchMeta, MatchNBT
mods.embers.Melter.addOreRecipe(<ore:ingotIron>, <liquid:iron>, true, false);
//OutputFluid
mods.embers.Melter.removeRecipe(<liquid:lava);

//Mixer
//Input1Fluid, Input2Fluid, Input3Fluid, Input4Fluid, OutputFluid
mods.embers.Mixer.addRecipe(<liquid:water>, <liquid:lava>, <liquid:iron>, <liquid:gold>, <liquid:copper>);
//OutputFluid
mods.embers.Mixer.removeRecipe(<liquid:brass>);

//Stamper
//InputStack, InputFluid, StampString, OutputStack, MatchMeta, MatchNBT
mods.embers.Stamper.addRecipe(<minecraft:diamond>, <liquid:water>, "stamp", <minecraft:nether_star>, false, true);
//InputOre, InputFluid, StampString, OutputStack
mods.embers.Stamper.addRecipe(<ore:ingotIron>, <liquid:lava>, "stamp", <minecraft:gold_ingot>);
//OutputStack
mods.embers.Stamper.removeRecipe(<minecraft:diamond>); 
```