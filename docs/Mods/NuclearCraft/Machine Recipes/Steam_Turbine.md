# Steam Turbine

## Importing the Package
`mods.nuclearcraft.turbine`

## Adding Recipes
```kotlin
mods.nuclearcraft.turbine.addRecipe([fluidInput, fluidOutput, double powerPerMB, double expansionLevel]);
```

## Removing Recipes
```kotlin
mods.nuclearcraft.turbine.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.turbine.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.turbine.removeAllRecipes();
```