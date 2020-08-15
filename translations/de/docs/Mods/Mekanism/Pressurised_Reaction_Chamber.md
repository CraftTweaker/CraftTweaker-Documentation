# Druckvolle Reaktionskammer

Ab Mekanismus 9,7. es ist nun möglich, alle Rezeptstrings der Druckvollen Reaktionskammer über den Befehl `/ct mekrecipes prc` anzuzeigen

## Addition

```zenscript
mods.mekanism.reaction.addRecipe(IIngredient itemInput, ILiquidStack liquidInput, IGasStack gasInput, IItemStack itemOutput, IGasStack gasOutput, double energy, int duration);

mods. ekanism.reaction.addRecipe(<mekanism:polyethene>, <liquid:liquidethene>, <gas:oxygen>, <mekanism:polyethene> * 8, <gas:oxygen>, 50000, 2000);
```

Ab Mekanism 9.7.0 ist es möglich, IIngredients als ItemInput statt nur IItemStacks zu verwenden.

Notiz: Momentan ist all dies eine Schleife über die verschiedenen Möglichkeiten in Java, während Sie hinzufügen, anstatt es in ZenScript zu tun. Derzeit gibt es keine Unterstützung für zusammengesetzte Inhaltsstoffe oder oredictionary in den Maschinen selbst.

## Entfernen

```zenscript
mods.mekanism.reaction.removeRecipe(IIngredient itemOutput, IIngredient gasOutput, @Optional IIngredient itemInput, @Optional IIngredient liquidInput, @Optional IIngredient gasInput);

mods. ekanism.reaction.removeRecipe(<mekanism:substrate>, <gas:ethene>, <mekanism:biofuel>, <liquid:water>, <gas:hydrogen>);
mods.mekanism.reaction.removeRecipe(<mekanism:polyethene>, <gas:oxygen>);
```

Wenn Sie einen Eingabeparameter angeben, wird nur das Rezept entfernt, das besagte Eingabe verwendet. Lässt man den Input-Parameter weg, werden alle Rezepte für das jeweilige Item gelöscht.

## Entferne alle Rezepte

Ab dem Mekanismus 9.7.0 ist es nun möglich, alle Rezepte der Druckluftkammer zu entfernen. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.reaction.removeAllRecipes();
```