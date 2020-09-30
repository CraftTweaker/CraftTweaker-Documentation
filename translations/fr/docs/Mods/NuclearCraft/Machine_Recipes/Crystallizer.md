# Crystallizer

## Importing the Package
`mods.nuclearcraft.crystallizer`

## Adding Recipes
```zenscript
mods.nuclearcraft.crystallizer.addRecipe([fluidInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.crystallizer.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.crystallizer.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.crystallizer.removeAllRecipes();
```