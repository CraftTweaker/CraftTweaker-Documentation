# Mariculture Support

## Handlers Supported
The following handlers are supported:

* Blacksmith's Anvil
* Casting
* Crucible Furnace Fuels
* Crucible Furnace Recipes
* Fishing Loot
* Vat
Each of these handlers can have recipes added or removed:
```zenscript
Parameters with '@Optional' are optional and can be left out

//Blacksmith's Anvil
//InputStack, OutputStack, HitAmount
mods.mariculture.Anvil.addRecipe(<minecraft:stone>, <minecraft:cobblestone>, 50);
//InputStack
mods.mariculture.Anvil.removeRecipe(<minecraft:red_flower>);

//Casting
//InputStack, OutputFluid
mods.mariculture.Casting.addNuggetRecipe(<liquid:gunpowder> * 16, <minecraft:gunpowder>);
mods.mariculture.Casting.addIngotRecipe(<liquid:gunpowder> * 144, <Mariculture:droplet:6>);
mods.mariculture.Casting.addBlockRecipe(<liquid:gunpowder> * 1296, <minecraft:tnt>);
//InputStack
mods.mariculture.Casting.removeNuggetRecipe(<Mariculture:materials:38>);
mods.mariculture.Casting.removeIngotRecipe(<Mariculture:materials:4>);
mods.mariculture.Casting.removeBlockRecipe(<Mariculture:metals>);

//Crucible Furnace
//MeltingTemperature, InputStack, @Optional OutputFluid, @Optional OutputStack, Chance //Chance = 100 : x
mods.mariculture.Crucible.addRecipe(1064, <minecraft:sponge>, <liquid:gold.molten> * 288, <Mariculture:rocks>, 4);
//InputStack
mods.mariculture.Crucible.removeRecipe(<minecraft:dirt>);
//InputStack/InputFluid/InputOredict, MaximumTemperature, TemperaturePer, Time in Ticks 
mods.mariculture.Crucible.addFuel(<minecraft:blaze_powder>, 3000, 50, 450); //Coal has MT of 2000, TPP of 40, MTT of 300
mods.mariculture.Crucible.addFuel(<liquid:water>, 500, 10, 240); //Lava has MT of 1500, TPP of 20, MTT of 360, PerPiece is 10mB
mods.mariculture.Crucible.addFuel(<ore:treeLeaves>, 160, 4, 100);
//InputStack/InputFluid/InputOredict
mods.mariculture.Crucible.removeFuel(<minecraft:coal>);
mods.mariculture.Crucible.removeFuel(<liquid:pyrotheum>);
mods.mariculture.Crucible.removeFuel(<ore:plankWood);

//Fishing
//LootStack, Chance, @Optional RodString, @Optional RodTypeRequired, @Optional DimensionIDArray //RodString = NET;OLD;GOOD;DIRE;SUPER;FLUX;blood
mods.mariculture.Fishing.addJunk(<minecraft:stick>, 25, "old", false, [0]);
mods.mariculture.Fishing.addGood(<minecraft:emerald>, 5, "SUPER", true, [0, -1]);
mods.mariculture.Fishing.addGood(<minecraft:diamond>, 1, "DIRE", true, [0, -1, 1]);
//LootStack
mods.mariculture.Fishing.removeLoot(<minecraft:stick>);

//Vat
//InputFluidStack, InputFluidStack2, InputStack, OutputFluid, OuputStack, Time in Ticks;
mods.mariculture.Vat.addRecipe(<liquid:water> * 1000, <liquid:custard> * 1000, <liquid:milk> * 2000, 10); //iFluid1, iFluid2 -> oFluid
mods.mariculture.Vat.addRecipe(<liquid:titanium.molten> * 4608 , <liquid:water> * 4000, <minecraft:bedrock>, 600); //iFluid1, iFluid2 -> oItem
mods.mariculture.Vat.addRecipe(<liquid:salt.molten> * 50 , <liquid:water> * 1000, <liquid:dirt> * 25, <Mariculture:materials:12>, 2000); //iFluid1, iFluid2 -> oFluid, oItem
mods.mariculture.Vat.addRecipe(<liquid:water> * 1000, <minecraft:gunpowder> * 16, <liquid:gunpowder> * 1000, 5); //iFluid, iItem -> oFluid
mods.mariculture.Vat.addRecipe(<liquid:quicklime> * 50, <minecraft:sand:1> * 4, <minecraft:sand> * 4, 30); //iFluid, iItem -> oItem
mods.mariculture.Vat.addRecipe(<liquid:lava> * 8000, <minecraft:iron_ore>, <liquid:dirt> * 200, <minecraft:iron_ingot> * 2, 800); //iFluid, iItem -> oFluid, oItem
mods.mariculture.Vat.addRecipe(<liquid:lava> * 2000, <liquid:flux> * 200, <Mariculture:pearls:5> * 3, <liquid:gold.molten> * 144, 90); //iFluid1, iFluid2, iItem -> oFluid
mods.mariculture.Vat.addRecipe(<liquid:water> * 4000, <liquid:fastwater> * 4000, <Mariculture:pearls:9>, <Mariculture:pearls>, 25); //iFluid1, iFluid2, iItem -> oItem

//OutputStack, OutputFluid
mods.mariculture.Vat.removeRecipe(<Mariculture:materials:13>, <liquid:water>);
//InputStack
mods.mariculture.Vat.removeRecipe(<minecraft:obsidian>);
//InputFluid
mods.mariculture.Vat.removeRecipe(<liquid:titanium.molten>);
```