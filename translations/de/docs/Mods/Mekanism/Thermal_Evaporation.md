# Thermische Verdunstung

Ab dem Mekanismus 9.7.0 ist es nun möglich, alle Rezeptfolgen der Thermik-Verdampfung durch den Befehl `/ct mekrecipes thermalevaporation` zu sehen

## Addition

```zenscript
mods.mekanism.thermalevaporation.addRecipe(ILiquidStack liquidInput, ILiquidStack liquidOutput);

mods.mekanism.thermalevaporation.addRecipe(<liquid:liquidfusionfuel>, <liquid:lava>);
```

## Entfernen

```zenscript
mods.mekanism.thermalevaporation.removeRecipe(IIngredient liquidInput, @Optional IIngredient liquidOutput);

mods.mekanism.thermalevaporation.removeRecipe(<liquid:water>, <liquid:brine>);
mods.mekanism.thermalevaporation.removeRecipe(<liquid:brine>);
```

Die Angabe eines Ausgabeparameters entfernt nur das spezifische Rezept, das zu dieser Ausgabe führt. Wird der Ausgabeparameter nicht aktiviert, werden alle Rezepte entfernt, die der Eingabeartikel produzieren kann.

## Entferne alle Rezepte

Ab Mekanism 9.7.0 ist es nun möglich, alle Rezepte der thermischen Verdampfungsanlage zu entfernen. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.thermalevaporation.removeAllRecipes();
```