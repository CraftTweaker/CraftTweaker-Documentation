# Chemical Washer

As of Mekanism 9.7.0 it is now possible to view all recipe strings of the Chemical Washer through the command `/ct mekrecipes washer`

## Addition

```zenscript
mods.mekanism.chemical.washer.addRecipe(IGasStack inputGas, IGasStack outputGas);

mods.mekanism.chemical.washer.addRecipe(<gas:deuterium>, <gas:tritium>);
```

## Removal

```zenscript
mods.mekanism.chemical.washer.removeRecipe(IIngredient outputGas, @Optional IIngredient inputGas);

mods.mekanism.chemical.washer.removeRecipe(<gas:cleanLead>, <gas:lead>);
mods.mekanism.chemical.washer.removeRecipe(<gas:cleanOsmium>);
```

Specifying an input parameter will only remove the specific recipe that uses said input. Lässt man den Input-Parameter weg, werden alle Rezepte für das jeweilige Item gelöscht.

## Removing all recipes

As of Mekanism 9.7.0 it is now possible to remove all Chemical Washer recipes. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.chemical.washer.removeAllRecipes();
```