# Salt Fission

## Importing the Package
`mods.nuclearcraft.salt_fission`

## Adding Recipes
```kotlin
mods.nuclearcraft.salt_fission.addRecipe([fluidInput, fluidOutput, double baseTime, double basePower, @Optional double processRadiation]);
```

## Removing Recipes
```kotlin
mods.nuclearcraft.salt_fission.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.salt_fission.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.decay_hastener.removeAllRecipes();
```