# Presurizador

## Importando el Paquete
`mods.nuclearcraft.pressurizer`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.pressurizer.addRecipe([itemInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.pressurizer.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.pressurizer.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.pressurizer.removeAllRecipes();
```