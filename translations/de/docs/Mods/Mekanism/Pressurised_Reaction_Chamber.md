# Pressurised Reaction Chamber

As of Mekanism 9.7.0 it is now possible to view all recipe strings of the Pressurised Reaction Chamber through the command `/ct mekrecipes prc`

## Addition

```zenscript
mods.mekanism.reaction.addRecipe(IIngredient itemInput, ILiquidStack liquidInput, IGasStack gasInput, IItemStack itemOutput, IGasStack gasOutput, double energy, int duration);

mods.mekanism.reaction.addRecipe(<mekanism:polyethene>, <liquid:liquidethene>, <gas:oxygen>, <mekanism:polyethene> * 8, <gas:oxygen>, 50000, 2000);
```

As of Mekanism 9.7.0 it is possible to use IIngredients as the itemInput instead of only IItemStacks.

Notiz: Momentan ist all dies eine Schleife über die verschiedenen Möglichkeiten in Java, während Sie hinzufügen, anstatt es in ZenScript zu tun. Derzeit gibt es keine Unterstützung für zusammengesetzte Inhaltsstoffe oder oredictionary in den Maschinen selbst.

## Entfernen

```zenscript
mods.mekanism.reaction.removeRecipe(IIngredient itemOutput, IIngredient gasOutput, @Optional IIngredient itemInput, @Optional IIngredient liquidInput, @Optional IIngredient gasInput);

mods.mekanism.reaction.removeRecipe(<mekanism:substrate>, <gas:ethene>, <mekanism:biofuel>, <liquid:water>, <gas:hydrogen>);
mods.mekanism.reaction.removeRecipe(<mekanism:polyethene>, <gas:oxygen>);
```

Wenn Sie einen Eingabeparameter angeben, wird nur das Rezept entfernt, das besagte Eingabe verwendet. Lässt man den Input-Parameter weg, werden alle Rezepte für das jeweilige Item gelöscht.

## Entferne alle Rezepte

As of Mekanism 9.7.0 it is now possible to remove all Pressurised Reaction Chamber recipes. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.reaction.removeAllRecipes();
```