# Precision Sawmill

As of Mekanism 9.7.0 it is now possible to view all recipe strings of the Precision Sawmill through the command `/ct mekrecipes sawmill`

## Addition

```zenscript
mods.mekanism.sawmill.addRecipe(IIngredient inputStack, IItemStack outputStack, @Optional IItemStack bonusOutput, @Optional double bonusChance);

mods.mekanism.sawmill.addRecipe(<minecraft:bow>, <minecraft:stick> * 3, <minecraft:string> * 3, 0.5);
mods.mekanism.sawmill.addRecipe(<minecraft:torch>, <minecraft:stick>);
```

Ab Mekanism 9.7.0 ist es möglich, IIngredients als InputStack statt nur IItemStacks zu verwenden.

Notiz: Momentan ist all dies eine Schleife über die verschiedenen Möglichkeiten in Java, während Sie hinzufügen, anstatt es in ZenScript zu tun. Derzeit gibt es keine Unterstützung für zusammengesetzte Inhaltsstoffe oder oredictionary in den Maschinen selbst.

## Entfernen

```zenscript
mods.mekanism.sawmill.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack, @Optional IIngredient bonusOutput);

mods.mekanism.sawmill.removeRecipe(<minecraft:bed>, <minecraft:planks>, <minecraft:wool>);
mods.mekanism.sawmill.removeRecipe(<minecraft:planks:*>);
```

Specifying an output parameter will only remove the specific recipe that results in that output from that input. Omitting the output parameter will remove all recipes that the input item can produce.

## Entferne alle Rezepte

As of Mekanism 9.7.0 it is now possible to remove all Precision Sawmill recipes. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.sawmill.removeAllRecipes();
```