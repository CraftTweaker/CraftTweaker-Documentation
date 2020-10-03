# Supercooler

## Importing the Package
`mods.nuclearcraft.supercooler`

## Adding Recipes
```zenscript
mods.nuclearcraft.supercooler.addRecipe([fluidInput, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.supercooler.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.supercooler.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.supercooler.removeAllRecipes();
```