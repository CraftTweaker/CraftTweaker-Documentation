# Centrifuge

## Importing the Package
`mods.nuclearcraft.centrifuge`

## Adding Recipes
```zenscript
mods.nuclearcraft.centrifuge.addRecipe([fluidInput, fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4 , @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.centrifuge.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.centrifuge.removeRecipeWithOutput([fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4]);
mods.nuclearcraft.centrifuge.removeAllRecipes();
```