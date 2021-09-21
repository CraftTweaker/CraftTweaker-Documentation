# Irradiator

## Importing the Package
`mods.nuclearcraft.irradiator`

## Adding Recipes
```zenscript
mods.nuclearcraft.irradiator.addRecipe([fluidInput1, fluidInput2, fluidOutput1, fluidOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.irradiator.removeRecipeWithInput([fluidInput1, fluidInput2]);
mods.nuclearcraft.irradiator.removeRecipeWithOutput([fluidOutput1, fluidOutput2]);
mods.nuclearcraft.irradiator.removeAllRecipes();
```