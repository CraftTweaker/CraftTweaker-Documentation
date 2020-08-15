# Purification Chamber

As of Mekanism 9.7.0 it is now possible to view all recipe strings of the Purification Chamber through the command `/ct mekrecipes purification`

## Addition

```zenscript
mods.mekanism.purification.addRecipe(IIngredient itemInput, @Optional IGasStack gasInput, IItemStack itemOutput);

mods.mekanism.purification.addRecipe(<minecraft:wool:1>, <gas:hydrogenchloride>, <minecraft:wool>);
mods.mekanism.purification.addRecipe(<minecraft:coal:1>, <minecraft:coal>);
```

As of Mekanism 9.7.0 inputGas is no longer restricted to only oxygen

Also as of Mekanism 9.7.0 it is possible to use IIngredients as the itemInput instead of only IItemStacks.

Notiz: Momentan ist all dies eine Schleife über die verschiedenen Möglichkeiten in Java, während Sie hinzufügen, anstatt es in ZenScript zu tun. Derzeit gibt es keine Unterstützung für zusammengesetzte Inhaltsstoffe oder oredictionary in den Maschinen selbst.

## Entfernen

```zenscript
mods.mekanism.purification.removeRecipe(IIngredient itemOutput, @Optional IIngredient itemInput, @Optional IIngredient gasInput);

mods.mekanism.purification.removeRecipe(<mekanism:clump:2>, <mekanism:shard:2>, <gas:oxygen>);
mods.mekanism.purification.removeRecipe(<mekanism:clump:1>);
```

Wenn Sie einen Eingabeparameter angeben, wird nur das Rezept entfernt, das besagte Eingabe verwendet. Lässt man den Input-Parameter weg, werden alle Rezepte für das jeweilige Item gelöscht.

## Entferne alle Rezepte

As of Mekanism 9.7.0 it is now possible to remove all Purification Chamber recipes. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.purification.removeAllRecipes();
```