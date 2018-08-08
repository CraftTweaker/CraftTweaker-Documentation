# Rune Altar

The RuneAltar package is used for adding or removing recipes to/from the Botania Rune Altar.

## Calling
You can call the RuneAltar package using `mods.botania.RuneAltar`

## Find all registered Recipes
You can find all registered Rune Altar recipes using [`/ct botania altar`](/Mods/Modtweaker/Botania/Commands/).

## Recipe addition

```
//mods.botania.RuneAltar.addRecipe(IItemStack output, IIngredient[] input, int mana);
mods.botania.RuneAltar.addRecipe(<minecraft:planks>,[<minecraft:grass>, <minecraft:dirt>], 200);
```

## Recipe removal

```
//mods.botania.RuneAltar.removeRecipe(IIngredient output);
mods.botania.RuneAltar.removeRecipe(<Botania:rune>);
```