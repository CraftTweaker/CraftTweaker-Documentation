# Fusion

## Importing the Package
`mods.nuclearcraft.fusion`

## Adding Recipes
```zenscript
mods.nuclearcraft.fusion.addRecipe([fluidInput1, fluidInput2, fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4, double comboTime, double comboPower, double comboHeatVar, @Optional double processRadiation]);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.fusion.removeRecipeWithInput([fluidInput1, fluidInput2]);
mods.nuclearcraft.fusion.removeRecipeWithOutput([fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4]);
mods.nuclearcraft.fusion.removeAllRecipes();
```