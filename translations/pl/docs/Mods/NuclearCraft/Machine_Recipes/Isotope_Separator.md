# Isotope Separator

## Importing the Package
`mods.nuclearcraft.isotope_separator`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.isotope_separator.addRecipe([itemInput, itemOutput1, itemOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.isotope_separator.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.isotope_separator.removeRecipeWithOutput([itemOutput1, itemOutput2]);
mods.nuclearcraft.isotope_separator.removeAllRecipes();
```