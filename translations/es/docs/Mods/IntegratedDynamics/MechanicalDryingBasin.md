# Cuenca seca mecánica

Este paquete le permite modificar las recetas de la Cuenca de Secado Mecánico.

## Importando el paquete

Si quieres importar este paquete, aquí vas:

```zenscript
importar mods.integrateddynamics.MechanicalDryingBasin;
```

## Añadiendo recetas

```zenscript
//MechanicalDryingBasin.addRecipe(@Optional ItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional ItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);

MechanicalDryingBasin. ddRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10);
```

## Eliminando recetas

```zenscript
//MechanicalDryingBasin.removeRecipe(@Optional ItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional ItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
MechanicalDryingBasin. emoveRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10);


//MechanicalDryingBasin. emoveRecipesWithOutput(@Optional ItemStack outputStack, @Optional ILiquidStack outputFluid);
MechanicalDryingBasin.removeRecipesWithOutput(<minecraft:leather>, null);
```