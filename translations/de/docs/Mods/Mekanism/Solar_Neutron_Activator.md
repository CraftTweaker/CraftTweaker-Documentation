# Solar-Neutron-Aktivator

Ab Mekanismus 9,7. ist es nun möglich, alle Rezeptstrings des Solar-Neutron-Aktiviers über den Befehl `/ct mekrecipes solarneutronactivator` anzuzeigen

## Addition

```zenscript
mods.mekanism.solarneutronactivator.addRecipe(IGasStack gasInput, IGasStack gasOutput);

mods.mekanism.solarneutronactivator.addRecipe(<gas:sulfurdioxide>, <gas:sulfurtrioxide>);
```

## Entfernen

```zenscript
mods.mekanism.solarneutronactivator.removeRecipe(IIngredient gasInput, @Optional IIngredient gasOutput);

mods.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>, <gas:tritium>);
mods.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>);
```

Die Angabe eines Ausgabeparameters entfernt nur das spezifische Rezept, das zu dieser Ausgabe führt. Wird der Ausgabeparameter nicht aktiviert, werden alle Rezepte entfernt, die der Eingabeartikel produzieren kann.

## Entferne alle Rezepte

Ab dem Mekanismus 9.7.0 ist es nun möglich, alle Rezepte des Solar Neutron Activators zu entfernen. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.solarneutronactivator.removeAllRecipes();
```