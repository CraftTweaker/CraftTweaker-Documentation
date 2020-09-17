# Kombinator

Ab dem Mekanismus 9.7.0 ist es nun möglich, alle Rezeptstrings des Kombinators `/ct mekrecipes combiner` anzuzeigen

## Addition

```zenscript
mods.mekanism.combiner.addRecipe(IIngredient itemInput, @Optional IIngredient extraInput, IItemStack itemOutput);

mods.mekanism.combiner.addRecipe(<minecraft:stone> * 4, <minecraft:cobblestone>, <minecraft:stonebrick>);
mods.mekanism.combiner.addRecipe(<minecraft:torch> * 4, <minecraft:stick>);
```

Ab Mekanism 9.7.0 ist es möglich, IIngredients als ItemInput und ExtraInput statt nur IItemStacks zu verwenden.

Notiz: Momentan ist all dies eine Schleife über die verschiedenen Möglichkeiten in Java, während Sie hinzufügen, anstatt es in ZenScript zu tun. Derzeit gibt es keine Unterstützung für zusammengesetzte Inhaltsstoffe oder oredictionary in den Maschinen selbst.

## Entfernen

```zenscript
mods.mekanism.combiner.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optionaler IIngredient extraInput);

mods.mekanism.combiner.removeRecipe(<minecraft:gravel>, <minecraft:flint>, <minecraft:cobblestone>);
mods.mekanism.combiner.removeRecipe(<minecraft:iron_ore>);
```

Wenn Sie einen Eingabeparameter angeben, wird nur das Rezept entfernt, das besagte Eingabe verwendet. Lässt man den Input-Parameter weg, werden alle Rezepte für das jeweilige Item gelöscht.

## Entferne alle Rezepte

Ab Mekanism 9.7.0 ist es nun möglich, alle Kombinationsrezepte zu entfernen. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.combiner.removeAllRecipes();
```