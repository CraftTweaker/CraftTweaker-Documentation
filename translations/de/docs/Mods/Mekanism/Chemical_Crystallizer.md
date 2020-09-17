# Chemischer Kristallisator

Ab dem Mekanismus 9.7.0 ist es nun möglich, alle Rezeptstrings des Chemischen Kristallisators über den Befehl `/ct Mekrecipes Kristallisator` anzuzeigen

## Addition

```zenscript
mods.mekanism.chemical.crystallizer.addRecipe(IGasStack inputGas, IItemStack outputStack);

mods.mekanism.chemical.crystallizer.addRecipe(<gas:water>, <minecraft:ice>);
```

## Entfernen

```zenscript
mods.mekanism.chemical.crystallizer.removeRecipe(IIngredient outputStack, @Optional IIngredient inputGas);

mods.mekanism.chemical.crystallizer.removeRecipe(<mekanism:otherdust:4>, <gas:lithium>);
mods.mekanism.chemical.crystallizer.removeRecipe(<mekanism:crystal:1>);
```

Wenn Sie einen Eingabeparameter angeben, wird nur das Rezept entfernt, das besagte Eingabe verwendet. Lässt man den Input-Parameter weg, werden alle Rezepte für das jeweilige Item gelöscht.

## Entferne alle Rezepte

Ab dem Mekanismus 9.7.0 ist es nun möglich, alle Rezepte für chemische Kristallisatoren zu entfernen. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.chemical.crystallizer.removeAllRecipes();
```