::requiredMod[Botania]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/botania}

# Botania Elven Trade

Elven Trade is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add three recipes to Elven Trading, the recipes will do the following:
1) When Glass is thrown through an Elven Portal, a piece of Dirt will be given back.
2) When a Glowstone Block and Yellow Wool are thrown through an Elven Portal, an Apple will be given back.
3) When a piece of Redstone Dust is thrown through an Elven Portal, an Apple and a Lapis Lazuli Block will be given back.

```zenscript
// <recipetype:botania:elven_trade>.addRecipe(name as string, outputs as IItemStack[], inputs as IIngredient...)

<recipetype:botania:elven_trade>.addRecipe("elven_trade_test", [<item:minecraft:dirt>], <item:minecraft:glass>);
<recipetype:botania:elven_trade>.addRecipe("elven_trade_multiple_test", [<item:minecraft:apple>], <item:minecraft:glowstone>, <item:minecraft:yellow_wool>);
<recipetype:botania:elven_trade>.addRecipe("elven_trade_multiple_multiple_test", [<item:minecraft:apple>, <item:minecraft:lapis_block>], <item:minecraft:redstone>);
```

#### Remove Recipes


##### Single Item Outputs

The following script will remove all recipes from Elven Trading that outputs a Dragon Stone.

```zenscript
// <recipetype:botania:elven_trade>.removeRecipe(output as IItemStack);

<recipetype:botania:elven_trade>.removeRecipe(<item:botania:dragonstone>);
```

##### Multiple Item Outputs

The following script will remove all recipes from Elven Trading that outputs a Dragon Stone and a Diamond.

**NOTE**

This is not a valid recipe in game with just Botania alone, Elven Trading supports outputting multiple items, but does not have any recipes built in that output multiple items.

```zenscript
// <recipetype:botania:elven_trade>.removeRecipe(output as IItemStack[]);

<recipetype:botania:elven_trade>.removeRecipe([<item:botania:dragonstone>, <item:minecraft:diamond>]);
```