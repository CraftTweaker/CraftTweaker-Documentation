# Isotope Separator

## Importing the Package
`mods.nuclearcraft.isotope_separator`

## Adding Recipes
```kotlin
mods.nuclearcraft.isotope_separator.addRecipe([itemInput, itemOutput1, itemOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Removing Recipes
```kotlin
mods.nuclearcraft.isotope_separator.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.isotope_separator.removeRecipeWithOutput([itemOutput1, itemOutput2]);
mods.nuclearcraft.isotope_separator.removeAllRecipes();
```