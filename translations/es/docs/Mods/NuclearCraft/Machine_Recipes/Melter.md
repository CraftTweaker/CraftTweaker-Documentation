# Caramelo

## Importando el Paquete
`mods.nuclearcraft.melter`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.melter.addRecipe([itemInput, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.melter.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.melter.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.melter.removeAllRecipes();
```