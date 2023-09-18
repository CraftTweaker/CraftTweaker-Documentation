# Factorization Support
## Handlers Supported
The following handlers are supported:

* Slag Furnace
* Lacerator
* Crystallizer
Each of these handlers can have recipes added or removed:
```zenscript
//Slag Furnace
//InputStack, OutputStack1, OutputStackChance1, OutputStack2, OutputStackChance2 (Chances are decimals, 1 = 100%)
mods.factorization.SlagFurnace.addRecipe(<minecraft:lapis_ore>, <minecraft:dye:4>, 3.5, <minecraft:quartz>, 0.5);
//InputStack
mods.factorization.SlagFurnace.removeRecipe(<factorization:DarkIronOre>);

//Lacerator
//InputStack, OutputStack, OutputStackChance (Decimals, 1 = 100%)
mods.factorization.Lacerator.addRecipe(<minecraft:sandstone>, <minecraft:sand>, 5);
//OutputStack
mods.factorization.Lacerator.removeRecipe(<minecraft:gravel>); 

//Crystallizer
//InputStack, OutputStack, SolutionStack, OutputCount
mods.factorization.Crystallizer.addRecipe(<minecraft:dye:4>, <minecraft:quartz>, <factorization:acid:1>, 0.5);
//OutputStack
mods.factorization.Crystallizer.removeRecipe(<factorization:ore/crystal:2>);
```

## Commands Supported
Prints are stored in the minetweaker log in the minecraft directory.
```
/minetweaker factorization [HANDLER] - Outputs a list of all Factorization recipes
```