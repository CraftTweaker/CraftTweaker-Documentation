# Infusuario

## Importando el Paquete
`mods.nuclearcraft.InfuserInfusuario`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Infuser.addRecipe(IIngredient itemInput, ILiquidStack fluidInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Infuser.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.Infuser.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Infuser.removeAllRecipes();Infuser.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Infuser.removeTodos();
```