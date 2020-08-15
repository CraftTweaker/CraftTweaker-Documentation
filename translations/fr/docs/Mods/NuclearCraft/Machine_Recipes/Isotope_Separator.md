# Isotope Separator

## Importation du paquet en cours
`format@@0 mods.nuclearcraft.isotope_separator`

## Ajout de recettes
```zenscript
mods.nuclearcraft.isotope_separator.addRecipe([itemInput, itemOutput1, itemOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.isotope_separator.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.isotope_separator.removeRecipeWithOutput([itemOutput1, itemOutput2]);
mods.nuclearcraft.isotope_separator.removeAllRecipes();
```