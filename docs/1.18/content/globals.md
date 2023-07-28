# Global ZenCode Keywords 

This file contains a list of Global keywords you can use in CraftTweaker. These are used in order to do some menial tasks.

## Global Functions

- `print(argument as string)` Prints a string to the `crafttweaker.log` file
- `println(argument as string)` Prints a string, on a new line, to the `crafttweaker.log` file.

## Global Getters

Global Getters get a value for you. They are mostly used for adding recipes.

- `blastFurnace` gets you the [BlastFurnaceRecipeManager Instance](/vanilla/api/recipe/manager/BlastFurnaceRecipeManager).
- `campfire` gets you the [CampFireRecipeManager Instance](/vanilla/api/recipe/manager/CampFireRecipeManager).
- `cauldron` gets you the [Cauldron Interaction Manager](/vanilla/api/misc/Cauldron).
- `composter` gets you the [Composter handler](/vanilla/api/misc/Composter ).
- `craftingTable` gets you the [CraftingTableRecipeManager Instance](/vanilla/api/recipe/manager/CraftingTableRecipeManager).
- `furnace` gets you the [FurnaceRecipeManager Instance](/vanilla/api/recipe/manager/FurnaceRecipeManager).
- `game` gets you the [Game](/vanilla/api/game/Game) object for you to use.
- `loadedMods` gets you the list of [Mods](/vanilla/api/mod/Mods).
- `loot` gets you the [LootManager Instance](/vanilla/api/loot/LootManager).
- `recipes` gets you the [GenericRecipesManager Instance](/vanilla/api/recipe/manager/GenericRecipesManager).
- `smithing` gets you the [SmithingRecipeManager Instance](/vanilla/api/recipe/manager/SmithingRecipeManager).
- `smoker` gets you the [SmokerRecipeManager Instance](/vanilla/api/recipe/manager/SmokerRecipeManager).
- `stonecutter` gets you the [StoneCutterManager Instance](/vanilla/api/recipe/manager/StoneCutterManager).
- `tags` gets you the global CraftTweakerTagRegistry.
- `villagerTrades` gets you the [VillagerTrades handler](/vanilla/api/villager/VillagerTrades).

### The CraftTweakerTagRegistry

The CraftTweakerTagRegistry is a class with a single method, used to do dynamic string manipulations with tags.

Since the following isn't doable with tags:

```zenscript
var colour = "white" + "_";
<tag:items:minecraft:${colour}wool>...
```

This exists to amend that, so you can do: 

```zenscript
var colour = "white" + "_";
tags.tagManager(<resource:minecraft:items>).tag(<resource:minecraft:${colour}wool>)
```


### Forge Only

- `brewing` gets you the Brewing manager from which you can use the methods inside of the [class](/forge/api/recipe/brewing/Brewing)