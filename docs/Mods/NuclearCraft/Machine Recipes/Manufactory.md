# Manufactory

## Importing the Package
`mods.nuclearcraft.manufactory`

## Adding Recipes
```kotlin
mods.nuclearcraft.manufactory.addRecipe([itemInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Removing Recipes
```kotlin
mods.nuclearcraft.manufactory.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.manufactory.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.manufactory.removeAllRecipes();
```