# Chemische Spritzkammer

Ab Mekanismus 9,7. ist es nun möglich, alle Rezeptstrings der Chemischen Injektionskammer über den Befehl `/ct mekrecipes Injektion` anzusehen

## Addition

```zenscript
mods.mekanism.chemical.injection.addRecipe(IIngredient inputStack, IGasStack inputGas, IItemStack outputStack);

mods.mekanism.chemical.injection.addRecipe(<minecraft:hardened_clay:1>, <gas:water>, <minecraft:clay>);
```

Ab dem Mekanismus ist 9.7.0 Inputgas nicht mehr nur auf Schwefelsäure beschränkt, Wasser oder Wasserstoffchlorid

Auch ab Mekanism 9.7.0 ist es möglich, IIngredients als InputStack statt nur IItemStacks zu verwenden.

Notiz: Momentan ist all dies eine Schleife über die verschiedenen Möglichkeiten in Java, während Sie hinzufügen, anstatt es in ZenScript zu tun. Derzeit gibt es keine Unterstützung für zusammengesetzte Inhaltsstoffe oder oredictionary in den Maschinen selbst.

## Entfernen

```zenscript
mods.mekanism.chemical.injection.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient inputGas);

mods.mekanism.chemical.injection.removeRecipe(<mekanism:shard:2>, <mekanism:oreblock>, <gas:hydrogenchloride>);
mods.mekanism.injection.removeRecipe(<mekanism:shard:1>);
```

Wenn Sie einen Eingabeparameter angeben, wird nur das Rezept entfernt, das besagte Eingabe verwendet. Lässt man den Input-Parameter weg, werden alle Rezepte für das jeweilige Item gelöscht.

## Entferne alle Rezepte

Ab dem Mekanismus 9.7.0 ist es nun möglich, alle Rezepte der Chemischen Spritzkammer zu entfernen. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.chemical.injection.removeAllRecipes();
```