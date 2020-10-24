# Rock Crusher

## Importing the Package
`mods.nuclearcraft.rock_crusher`

## Adding Recipes
```zenscript
mods.nuclearcraft.rock_crusher.addRecipe([itemInput, itemOutput1, itemOutput2, itemOutput3, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.rock_crusher.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.rock_crusher.removeRecipeWithOutput([itemOutput1, itemOutput2, itemOutput3]);
mods.nuclearcraft.rock_crusher.removeAllRecipes();
```