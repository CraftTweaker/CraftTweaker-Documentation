# Materia

## Importando el Paquete
`mods.nuclearcraft.ManufactoryMateria`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Manufactory.addRecipe(IIngredient itemInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Manufactory.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Manufactory.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Manufactory.removeAllRecipes();Manufactory.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Manufactory.removeAllRecipes();
```