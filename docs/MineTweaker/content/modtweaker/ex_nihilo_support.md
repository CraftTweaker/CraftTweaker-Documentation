# Ex Nihilo Support

## Handlers supported
The following handlers are supported:

* Composting
* Crucible
* Hammer
* Sieve
Each of these handlers can have recipes added or removed:
```zenscript
Parameters with '@Optional' are optional and can be left out

//Composting
//InputStack, FillAmount, @Optional HexColor
mods.exnihilo.Composting.addRecipe(<minecraft:hay_block>, 0.72, "E3E162");
//InputStack
mods.exnihilo.Composting.removeRecipe(<minecraft:sapling>);

//Crucible
//BlockStack, OutputFluid
mods.exnihilo.Crucible.addRecipe(<minecraft:packed_ice>, <liquid:water> * 1000);
//OutputFluid
mods.exnihilo.Crucible.removeRecipe(<liquid:lava>);
//BlockStack, HeatValue
mods.exnihilo.Crucible.addHeatSource(<minecraft:coal_block>, 0.1);
//BlockStack
mods.exnihilo.Crucible.removeHeatSource(<minecraft:lava>);

//Hammer
//BlockStack, OuputStack OR OutputArray, Chance OR ChanceArray, LuckModifier OR LuckModifierArray
mods.exnihilo.Hammer.addRecipe(<minecraft:cactus>, <minecraft:dye:2>, 0.45, 1.25);
mods.exnihilo.Hammer.addRecipe(<minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:sand>], [0.25, 0.50], [1.00, 1.50]);
//BlockStack
mods.exnihilo.Hammer.removeRecipe(<minecraft:sand>);

//Sieve
//BlockStack, OutputStack OR OutputArray, Rarity OR RarityArray (Rarity goes in Fractions, 1 = 100Pe, 2 = 50Pe, 3 = 33Pe)
mods.exnihilo.Sieve.addRecipe(<minecraft:clay>, <minecraft:waterlily>, 5);
mods.exnihilo.Sieve.addRecipe(<minecraft:mycelium>, [<minecraft:red_mushroom>, <minecraft:brown_mushroom>], [2, 2]); 
//OutputStack
mods.exnihilo.Sieve.removeRecipe(<minecraft:dirt>);
```

## Commands supported
Prints are stored in the minetweaker log in the minecraft directory.
```
/minetweaker exnihilo [HANDLER] - Outputs a list of all ExNihilo recipes
```