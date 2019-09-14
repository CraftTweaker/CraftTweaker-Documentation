# Supercooler

## Importing the Package
`mods.nuclearcraft.decay_hastener`

## Adding Recipes
```kotlin
mods.nuclearcraft.supercooler.addRecipe([fluidInput, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Removing Recipes
```kotlin
mods.nuclearcraft.supercooler.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.supercooler.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.supercooler.removeAllRecipes();
```