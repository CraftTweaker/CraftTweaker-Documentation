# Cristallizador

## Importando el Paquete
`mods.nuclearcraft.CrystallizerCristallizador`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Crystallizer.addRecipe(ILiquidStack fluidInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Crystallizer.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Crystallizer.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Crystallizer.removeAllRecipes();Crystallizer.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Crystallizer.removeAllRecipes();
```