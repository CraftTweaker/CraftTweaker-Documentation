# Pressurizer

## Importing the Package
`mods.nuclearcraft.pressurizer`

## Adding Recipes
```zenscript
mods.nuclearcraft.pressurizer.addRecipe([itemInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.pressurizer.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.pressurizer.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.pressurizer.removeAllRecipes();
```