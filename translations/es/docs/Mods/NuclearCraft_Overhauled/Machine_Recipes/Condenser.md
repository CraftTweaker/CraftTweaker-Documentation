# Condenador
**Nota: Parcialmente roto**

## Importando el Paquete
`mods.nuclearcraft.CondenserCondenador`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Condenser.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, @Optional double coolingRequired, @Optional int condensingTemperature);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.SupercoolerCondenser.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.mods.nuclearcraft.Condenser.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Condenser.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.Condenser.removeAllRecipes();Condenser.removeAll-Recipes();
```