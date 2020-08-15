# Chemische Infuser

Ab Mekanism 9.7.0 ist es nun möglich, alle Rezeptstrings der Chemischen Infuser über den Befehl `/ct mekrecipes chemicalInfuser` anzuzeigen

## Addition

```zenscript
mods.mekanism.chemical.infuser.addRecipe(IGasStack inputGas1, IGasStack inputGas2, IGasStack outputGas);

mods.mekanism.chemical.infuser.addRecipe(<gas:water>, <gas:deuterium>, <gas:tritium>);
```

## Entfernen

```zenscript
mods.mekanism.chemical.infuser.removeRecipe(IIngredient outputGas, @Optional IIngredient inputGas1, @Optional IIngredient inputGas2);

mods.mekanism.chemical.infuser.infuser.removeRecipe(<gas:hydrogenchloride>, <gas:hydrogen>, <gas:chlorine>);
mods.mekanism.chemical.infuser.removeRecipe(<gas:fusionfuel>);
```

Wenn Sie einen Eingabeparameter angeben, wird nur das Rezept entfernt, das besagte Eingabe verwendet. Lässt man den Input-Parameter weg, werden alle Rezepte für das jeweilige Item gelöscht.

## Entferne alle Rezepte

Ab Mekanism 9.7.0 ist es nun möglich, alle chemischen Infuser-Rezepte zu entfernen. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.chemical.infuser.removeAllRecipes();
```