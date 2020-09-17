# Reactor Químico

## Importando el Paquete
`mods.nuclearcraft.ChemicalReactorReactor Químico`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.ChemicalReactor.addRecipe(ILiquidStack fluidInput1, ILiquidStack fluidInput2, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.SupercoolerChemicalReactor.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.mods.nuclearcraft.ChemicalReactor.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.ChemicalReactor.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2);
mods.nuclearcraft.ChemicalReactor.removeAllRecipes();ChemicalReactor.removeAllRecipes();
```