# Drying

The `Drying` package allows you to add or remove Drying recipes.

## Anruf

You can call the Drying package using `mods.tconstruct.Drying`

## Hinzufügen

The time is in ticks

```zenscript
//mods.tconstruct.Drying.addRecipe(IItemStack output, IIngredient input, int time);
mods.tconstruct.Drying.addRecipe(<minecraft:leather>,<minecraft:rotten_flesh>, 100);
```

## Entfernen

```zenscript
//mods.tconstruct.Drying.removeRecipe(IItemStack output);
mods.tconstruct.Drying.removeRecipe(<minecraft:leather>);

//mods.tconstruct.Drying.removeRecipe(IItemStack output, IItemStack input);
mods.tconstruct.Drying.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);
```