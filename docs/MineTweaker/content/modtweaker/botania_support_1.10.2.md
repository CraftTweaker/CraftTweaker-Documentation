# Botania Support 1.10.2

## Handlers Supported

* Botanical Brewing
* Elven Trade
* [Lexica Botania](/modtweaker/botania_support/lexica_botania)
* Mana Infusion
* Orechid
* Pure Daisy
* Rune Altar

Each of these handlers can have recipes added or removed:
```zenscript
Parameters marked as red are optional and can be left out

//Botanical Brewing
//InputArray, BrewString
mods.botania.Brew.addRecipe([<minecraft:nether_wart>, <minecraft:reeds>, <minecraft:redstone>], "speed");
//BrewString
mods.botania.Brew.removeRecipe("absorption"); 

//Elven Trade
//OutputStack, InputArray
mods.botania.ElvenTrade.addRecipe(<Botania:flower:4>, [<minecraft:yellow_flower>]);
//OutputStack
mods.botania.ElvenTrade.removeRecipe(<Botania:dreamwood>);

//Mana Infusion/Alchemy/Conjuration
//OutputStack, InputStack, ManaCost
mods.botania.ManaInfusion.addInfusion(<minecraft:golden_apple:1>, <minecraft:golden_apple>, 50000);
mods.botania.ManaInfusion.addAlchemy(<minecraft:sand> * 4, <minecraft:sandstone:*>, 10);
mods.botania.ManaInfusion.addConjuration(<minecraft:sand:1> * 2, <minecraft:sand:1>, 5);
//OutputStack
mods.botania.ManaInfusion.removeRecipe(<Botania:manaResource>); //Infusion
mods.botania.ManaInfusion.removeRecipe(<minecraft:leather>); //Alchemy
mods.botania.ManaInfusion.removeRecipe(<minecraft:redstone> * 2); //Conjuration

//Orechid
//InputOredict, Weight
mods.botania.Orechid.addOre(<ore:logWood>, 5000);
//InputOredict
mods.botania.Orechid.removeOre(<ore:oreIron>);

//Petal Apothecary - Everything is a valid input item except seeds that complete the crafting process
//OutputStack, InputArray
mods.botania.Apothecary.addRecipe("bubbell", [<ore:petalCyan>, <ore:petalBlue>, <Botania:manaResource:6>, <Botania:manaResource:10> * 1]);
mods.botania.Apothecary.addRecipe(<minecraft:melon>, [<ore:petalLime>, <ore:petalRed>, <minecraft:wheat_seeds>]);
//OutputStack OR String (String is for subtiled Botania Flowers)
mods.botania.Apothecary.removeRecipe("daybloom");

//Pure Daisy
//InputBlock, OutputBlock
mods.botania.PureDaisy.addRecipe(<minecraft:emerald_block>, <minecraft:diamond_block>);
//OutputBlock
mods.botania.PureDaisy.removeRecipe(<minecraft:obsidian>);

//Rune Altar
//OutputStack, InputArray, ManaCost
mods.botania.RuneAltar.addRecipe(<minecraft:stonebrick:2>, [<minecraft:stonebrick>, <minecraft:gunpowder>], 5);
//OutputStack
mods.botania.RuneAltar.removeRecipe(<Botania:rune>);
```

## Commands Supported
Prints are stored in the minetweaker log in the minecraft directory.
```
/minetweaker botania [HANDLER] - Outputs a list of all Botania recipes
/minetweaker botaniaBrews - Outputs a list of keys for botania brews
/minetweaker botaniaOrechid - Outputs a list of keys for botania orechid weights
```