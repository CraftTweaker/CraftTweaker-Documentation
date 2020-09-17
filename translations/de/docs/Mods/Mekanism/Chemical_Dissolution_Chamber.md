# Chemische Auflösungskammer

Ab Mekanismus 9,7. es ist nun möglich, alle Rezeptstrings der Chemischen Zellkammer über den Befehl `/ct mekrecipes aufzulösen`

## Addition

```zenscript
mods.mekanism.dissolution.addRecipe(IIngredient inputStack, IGasStack outputGas);

mods.mekanism.chemical.dissolution.addRecipe(<minecraft:ice>, <gas:water>);
```

Ab Mekanism 9.7.0 ist es möglich, IIngredients als InputStack statt nur IItemStacks zu verwenden.

Notiz: Momentan ist all dies eine Schleife über die verschiedenen Möglichkeiten in Java, während Sie hinzufügen, anstatt es in ZenScript zu tun. Derzeit gibt es keine Unterstützung für zusammengesetzte Inhaltsstoffe oder oredictionary in den Maschinen selbst.

## Entfernen

```zenscript
mods.mekanism.chemical.dissolution.removeRecipe(IIngredient outputGas, @Optional IIngredient inputStack);

mods.mekanism.chemical.dissolution.removeRecipe(<gas:osmium>, <mekanism:oreblock>);
mods.mekanism.chemical.dissolution.removeRecipe(<gas:tin>);
```

Wenn Sie einen Eingabeparameter angeben, wird nur das Rezept entfernt, das besagte Eingabe verwendet. Lässt man den Input-Parameter weg, werden alle Rezepte für das jeweilige Item gelöscht.

## Entferne alle Rezepte

Ab dem Mekanism 9.7.0 ist es nun möglich, alle Rezepte der Chemischen Zersetzungskammer zu entfernen. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.chemical.dissolution.removeAllRecipes();
```