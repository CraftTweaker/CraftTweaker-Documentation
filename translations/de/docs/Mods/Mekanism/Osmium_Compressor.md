# Osmium-Kompressor

Ab Mekanism 9.7.0 ist es nun möglich, alle Rezeptstrings des Osmiumkompressors über den Befehl `/ct mekrecipes compressor` anzuzeigen

## Addition

```zenscript
mods.mekanism.compressor.addRecipe(IIngredient inputStack, @Optional IGasStack inputGas, IItemStack outputStack);

mods.mekanism.compressor.addRecipe(<mekanism:basicblock:3>, <gas:liquidosmium>, <minecraft:stone>);
mods.mekanism.compressor.addRecipe(<mekanism:basicblock:1>, <minecraft:netherrack>);
```

Ab dem Mekanismus ist 9.7.0 inputGas nicht mehr nur auf Osmium beschränkt.

Auch ab Mekanism 9.7.0 ist es möglich, IIngredients als InputStack statt nur IItemStacks zu verwenden.

Notiz: Momentan ist all dies eine Schleife über die verschiedenen Möglichkeiten in Java, während Sie hinzufügen, anstatt es in ZenScript zu tun. Derzeit gibt es keine Unterstützung für zusammengesetzte Inhaltsstoffe oder oredictionary in den Maschinen selbst.

## Entfernen

```zenscript
mods.mekanism.compressor.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient inputGas);

mods.mekanism.compressor.removeRecipe(<mekanism:ingot>, <mekanism:otherdust:5>, <gas:liquidosmium>);
mods.mekanism.compressor.removeRecipe(<mekanism:ingot:3>);
```

Wenn Sie einen Eingabeparameter angeben, wird nur das Rezept entfernt, das besagte Eingabe verwendet. Lässt man den Input-Parameter weg, werden alle Rezepte für das jeweilige Item gelöscht.

## Entferne alle Rezepte

Ab Mekanism 9.7.0 ist es nun möglich, alle Rezepte des Osmiumkompressors zu entfernen. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.compressor.removeAllRecipes();
```