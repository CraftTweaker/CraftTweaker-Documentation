# Pure Daisy

The PureDaisy package is used for adding or removing recipes to/from the Botania Pure Daisy.

## Calling
You can call the PureDaisy package using `mods.botania.PureDaisy`

## Find all registered Recipes
You can find all registered Pure Daisy recipes using [`/ct botania daisy`](/Mods/Modtweaker/Botania/Commands).

## Recipe addition

The time defaults to 150 ticks

```
//mods.botania.PureDaisy.addRecipe(IIngredient blockInput, IItemStack blockOutput, @Optional int time);
mods.botania.PureDaisy.addRecipe(<minecraft:dirt>,<minecraft:grass>);
mods.botania.PureDaisy.addRecipe(<minecraft:planks>,<minecraft:grass>, 200);
```

## Recipe removal

```
//mods.botania.PureDaisy.removeRecipe(IIngredient output);
mods.botania.PureDaisy.removeRecipe(<minecraft:obsidian>);
```