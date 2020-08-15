# Aún

ModTweaker te permite añadir o eliminar recetas aún forestales

## Llamando

You can call the package using `mods.forestry.Still`

## Receta eliminada

```zenscript
//mods.forestry.Still.removeRecipe(salida ILiquidStack, @Optional ILiquidStack fluidInput);
mods.forestry.Still.removeRecipe(<liquid:bio.ethanol>);
mods.forestry.Still.removeRecipe(<liquid:refinedcanolaoil>,<liquid:canolaoil>);
```

## Adición de receta

```zenscript
//mods.forestry.Still.addRecipe(ILiquidStack fluidOutput, ILiquidStack fluidInput, int timePerit);
mods.forestry.Still.addRecipe(<liquid:lava>, <liquid:water>, 200);
```