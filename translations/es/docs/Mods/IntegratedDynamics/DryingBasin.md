# Cuenca seca

Este paquete te permite modificar las recetas de la cuenca seca.

## Importando el paquete

Si quieres importar este paquete, aquí vas:

```zenscript
importar mods.integrateddynamics.DryingBasin;
```

## Añadiendo recetas

```zenscript
//DryingBasin.addRecipe(@Optional ItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional ItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);

DryingBasin. ddRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10);
```

## Eliminando recetas

```zenscript
//DryingBasin.removeRecipe(@Optional ItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional ItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
DryingBasin. emoveRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10);


//DryingBasin. emoveRecipesWithOutput(@Optional ItemStack outputStack, @Optional ILiquidStack outputFluid);
DryingBasin.removeRecipesWithOutput(<minecraft:leather>, null);
```