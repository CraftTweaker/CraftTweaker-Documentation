# Ingot Former

## Importing the Package
`mods.nuclearcraft.ingot_former`

## Adding Recipes
```kotlin
mods.nuclearcraft.ingot_former.addRecipe([fluidInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Removing Recipes
```kotlin
mods.nuclearcraft.ingot_former.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.ingot_former.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.ingot_former.removeAllRecipes();
```