# Alloy Furnace

## Importing the Package
`mods.nuclearcraft.alloy_furnace`

## Adding Recipes
```kotlin
mods.nuclearcraft.alloy_furnace.addRecipe([itemInput1, itemInput2, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Removing Recipes
```kotlin
mods.nuclearcraft.alloy_furnace.removeRecipeWithInput([itemInput1, itemInput2]);
mods.nuclearcraft.alloy_furnace.removeRecipeWithOutput([itemOutput1]);
mods.nuclearcraft.alloy_furnace.removeAllRecipes();
```