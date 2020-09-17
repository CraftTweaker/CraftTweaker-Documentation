# Electrolizador

## Importando el Paquete
`mods.nuclearcraft.ElectrolyzerElectrolizador`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Electrolyser.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Electrolyser.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Electrolyser.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4);
mods.nuclearcraft.Electrolyser.removeAllRecipes();Electrolyser.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4);
mods.nuclearcraft.Electrolyser.removeAllRecipes();
```