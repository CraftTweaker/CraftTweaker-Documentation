# Decay Infuser

## Importing the Package
`mods.nuclearcraft.infuser`

## Adding Recipes
```zenscript
mods.nuclearcraft.infuser.addRecipe([itemInput, fluidInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.infuser.removeRecipeWithInput([itemInput, fluidInput]);
mods.nuclearcraft.infuser.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.infuser.removeAllRecipes();
```