# Kreuzritter

Ab dem Mekanismus 9.7.0 ist es nun möglich, alle Rezeptstrings des Kreuzzugs über den Befehl `/ct mekrecipes Brecher` anzuzeigen

## Addition

```zenscript
mods.mekanism.crusher.addRecipe(IIngredient inputStack, IItemStack outputStack);

mods.mekanism.crusher.addRecipe(<minecraft:double_plant:4>, <minecraft:dye:1> * 5);
```

Ab Mekanism 9.7.0 ist es möglich, IIngredients als InputStack statt nur IItemStacks zu verwenden.

Notiz: Momentan ist all dies eine Schleife über die verschiedenen Möglichkeiten in Java, während Sie hinzufügen, anstatt es in ZenScript zu tun. Derzeit gibt es keine Unterstützung für zusammengesetzte Inhaltsstoffe oder oredictionary in den Maschinen selbst.

## Entfernen

```zenscript
mods.mekanism.crusher.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack);

mods.mekanism.crusher.removeRecipe(<minecraft:sand>, <minecraft:gravel>);
mods.mekanism.crusher.removeRecipe(<minecraft:gravel>);
```

Wenn Sie einen Eingabeparameter angeben, wird nur das Rezept entfernt, das besagte Eingabe verwendet. Lässt man den Input-Parameter weg, werden alle Rezepte für das jeweilige Item gelöscht.

## Entferne alle Rezepte

Ab Mekanism 9.7.0 ist es nun möglich, alle Crusher-Rezepte zu entfernen. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.crusher.removeAllRecipes();
```