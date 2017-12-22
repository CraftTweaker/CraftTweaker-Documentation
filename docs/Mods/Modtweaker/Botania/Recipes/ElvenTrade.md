# Elven Trading

The ElvenTrade package is used for adding or removing recipes to/from the Botania Portal to Alfheim.

## Calling
You can call the ElvenTrade package using `mods.botania.ElvenTrade`

## Find all registered Recipes
You can find all registered ElvenTrade recipes using [`/ct botania trades`](/Mods/Modtweaker/Botania/Commands).

## Recipe addition

```
//mods.botania.ElvenTrade.addRecipe(IIngredient[] outputs, IIngredient[] input);
mods.botania.ElvenTrade.addRecipe([<minecraft:iron_ingot>], [<minecraft:dirt>,<minecraft:grass>]);
```

## Recipe removal

```
//mods.botania.ElvenTrade.removeRecipe(IIngredient output);
mods.botania.ElvenTrade.removeRecipe(<Botania:dreamwood>);
```