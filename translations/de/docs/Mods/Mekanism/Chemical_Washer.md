# Chemischer Washer

Ab dem Mekanismus 9.7.0 ist es nun möglich, alle Rezeptstrings des chemischen Öls über den Befehl `/ct Mekrecipes washer` anzuzeigen

## Addition

```zenscript
mods.mekanism.chemical.washer.addRecipe(IGasStack inputGas, IGasStack outputGas);

mods.mekanism.chemical.washer.addRecipe(<gas:deuterium>, <gas:tritium>);
```

## Entfernen

```zenscript
mods.mekanism.chemical.washer.removeRecipe(IIngredient outputGas, @Optional IIngredient inputGas);

mods.mekanism.chemical.washer.removeRecipe(<gas:cleanLead>, <gas:lead>);
mods.mekanism.chemical.washer.removeRecipe(<gas:cleanOsmium>);
```

Wenn Sie einen Eingabeparameter angeben, wird nur das Rezept entfernt, das besagte Eingabe verwendet. Lässt man den Input-Parameter weg, werden alle Rezepte für das jeweilige Item gelöscht.

## Entferne alle Rezepte

Ab dem Mekanism 9.7.0 ist es nun möglich, alle chemischen Abgasrezepte zu entfernen. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.chemical.washer.removeAllRecipes();
```