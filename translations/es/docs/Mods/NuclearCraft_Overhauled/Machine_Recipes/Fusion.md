# Fusión
**Nota: Aún no implementado**

## Importando el Paquete
`mods.nuclearcraft.FusionFusión`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Fusion.addRecipe(ILiquidStack fluidInput1, ILiquidStack fluidInput2, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4, double comboTime, double comboPower, double comboHeatVar, double processRadiation);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.SupercoolerFusion.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.Fusion.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4);
mods.nuclearcraft.Fusion.remover todas las recetas ();
```