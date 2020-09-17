# Isotope Separator

## Importando el Paquete
`mods.nuclearcraft.isotope_separator`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.isotope_separator.addRecipe([itemInput, itemOutput1, itemOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.isotope_separator.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.isotope_separator.removeRecipeWithOutput([itemOutput1, itemOutput2]);
mods.nuclearcraft.isotope_separator.removeAllRecipes();
```