# Decay Hastener

## Importing the Package
`mods.nuclearcraft.decay_hastener`

## Adding Recipes
```kotlin
mods.nuclearcraft.decay_hastener.addRecipe([itemInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Removing Recipes
```kotlin
mods.nuclearcraft.decay_hastener.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.decay_hastener.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.decay_hastener.removeAllRecipes();
```