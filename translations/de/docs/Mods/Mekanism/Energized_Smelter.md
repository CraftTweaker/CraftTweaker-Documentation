# Energierierter Schmelzer

Ab dem Mekanismus 9.7.0 ist es nun möglich, alle Rezeptfolgen des Energized Schmelters über den Befehl `/ct mekrecipes smelter` anzuzeigen

## Addition

```zenscript
mods.mekanism.smelter.addRecipe(IIngredient inputStack, IItemStack outputStack);

mods.mekanism.smelter.addRecipe(<minecraft:tallgrass:1>, <minecraft:deadbush>);
```

Ab Mekanism 9.7.0 ist es möglich, IIngredients als InputStack statt nur IItemStacks zu verwenden.

Notiz: Momentan ist all dies eine Schleife über die verschiedenen Möglichkeiten in Java, während Sie hinzufügen, anstatt es in ZenScript zu tun. Derzeit gibt es keine Unterstützung für zusammengesetzte Inhaltsstoffe oder oredictionary in den Maschinen selbst.

## Entfernen

```zenscript
mods.mekanism.smelter.removeRecipe(IIngredient inputStack, @Optionale IIngredient outputStack);

mods.mekanism.smelter.removeRecipe(<minecraft:sand:*>, <minecraft:glass>);
mods.mekanism.smelter.removeRecipe(<minecraft:cobblestone>);
```

Die Angabe eines Ausgabeparameters entfernt nur das spezifische Rezept, das zu dieser Ausgabe führt. Wird der Ausgabeparameter nicht aktiviert, werden alle Rezepte entfernt, die der Eingabeartikel produzieren kann.

## Entferne alle Rezepte

Ab Mekanism 9.7.0 ist es nun möglich, alle Rezepte für Energized Schmelzer zu entfernen. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.smelter.removeAllRecipes();
```