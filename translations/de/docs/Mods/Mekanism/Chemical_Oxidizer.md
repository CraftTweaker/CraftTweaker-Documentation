# Chemischer Oxidator

Ab dem Mekanismus 9.7.0 ist es nun möglich, alle Rezeptstrings des Chemischen Oxidizers über den Befehl `/ct mekrecipes oxidizer` anzuzeigen

## Addition

```zenscript
mods.mekanism.chemical.oxidizer.addRecipe(IIngredient inputStack, IGasStack outputGas);

mods.mekanism.chemical.oxidizer.addRecipe(<mekanism:dust:2>, <gas:cleanOsmium>);
```

Ab Mekanism 9.7.0 ist es möglich, IIngredients als InputStack statt nur IItemStacks zu verwenden.

Notiz: Momentan ist all dies eine Schleife über die verschiedenen Möglichkeiten in Java, während Sie hinzufügen, anstatt es in ZenScript zu tun. Derzeit gibt es keine Unterstützung für zusammengesetzte Inhaltsstoffe oder oredictionary in den Maschinen selbst.

## Entfernen

```zenscript
mods.mekanism.chemical.oxidizer.removeRecipe(IIngredient outputGas, @Optional IIngredient inputStack);

mods.mekanism.chemical.oxidizer.removeRecipe(<gas:brine>, <mekanism:salt>);
mods.mekanism.chemical.oxidizer.removeRecipe(<gas:lithium>);
```

Wenn Sie einen Eingabeparameter angeben, wird nur das Rezept entfernt, das besagte Eingabe verwendet. Lässt man den Input-Parameter weg, werden alle Rezepte für das jeweilige Item gelöscht.

## Entferne alle Rezepte

Ab dem Mekanism 9.7.0 ist es nun möglich, alle chemischen Oxidationsrezepte zu entfernen. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.chemical.oxidizer.removeAllRecipes();
```