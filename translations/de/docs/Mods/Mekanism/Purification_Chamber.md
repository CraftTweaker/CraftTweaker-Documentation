# Reinigungskammer

Ab dem Mekanismus 9.7.0 ist es nun möglich, alle Rezeptstränge der Reinigungskammer über den Befehl `/ct mekrecipes Reinigung`

## Addition

```zenscript
mods.mekanism.purification.addRecipe(IIngredient itemInput, @Optional IGasStack gasInput, IItemStack itemOutput);

mods.mekanism.purification.addRecipe(<minecraft:wool:1>, <gas:hydrogenchloride>, <minecraft:wool>);
mods.mekanism.purification.addRecipe(<minecraft:coal:1>, <minecraft:coal>);
```

Ab dem Mekanismus ist 9.7.0 inputGas nicht mehr nur auf Sauerstoff beschränkt

Auch ab Mekanism 9.7.0 ist es möglich, IIngredients als ItemInput statt nur IItemStacks zu verwenden.

Notiz: Momentan ist all dies eine Schleife über die verschiedenen Möglichkeiten in Java, während Sie hinzufügen, anstatt es in ZenScript zu tun. Derzeit gibt es keine Unterstützung für zusammengesetzte Inhaltsstoffe oder oredictionary in den Maschinen selbst.

## Entfernen

```zenscript
mods.mekanism.purification.removeRecipe(IIngredient itemOutput, @Optionale IIngredient itemInput, @Optionale IIngredient gasInput);

mods.mekanism.purification.removeRecipe(<mekanism:clump:2>, <mekanism:shard:2>, <gas:oxygen>);
mods.mekanism.purification.removeRecipe(<mekanism:clump:1>);
```

Wenn Sie einen Eingabeparameter angeben, wird nur das Rezept entfernt, das besagte Eingabe verwendet. Lässt man den Input-Parameter weg, werden alle Rezepte für das jeweilige Item gelöscht.

## Entferne alle Rezepte

Ab dem Mekanismus 9.7.0 ist es nun möglich, alle Rezepte der Reinigungskammer zu entfernen. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.purification.removeAllRecipes();
```